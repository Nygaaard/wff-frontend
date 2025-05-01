import WineCard from "../components/WineCard";
import { useState, useEffect } from "react";
import { WineProps } from "../types/Wines/WineProps";
import { useNavigate } from "react-router-dom";

const WinesPage = () => {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [filteredWines, setFilteredWines] = useState<WineProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [producers, setProducers] = useState<string[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProducer, setSelectedProducer] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/wine?per_page=100"
        );

        if (!response.ok) throw new Error();
        const data: WineProps[] = await response.json();
        console.log(data);
        setWines(data);
        setFilteredWines(data);
        extractFilterOptions(data);
      } catch {
        setError("Något gick fel vid hämtning av viner...");
      } finally {
        setLoading(false);
      }
    };

    fetchWines();
  }, []);

  const extractFilterOptions = (data: WineProps[]) => {
    const unique = (arr: (string | undefined)[]) =>
      Array.from(new Set(arr.filter(Boolean))) as string[];

    setCategories(unique(data.map((w) => w.wff_varugrupp)));
    setCountries(unique(data.map((w) => w.wff_land)));
    setProducers(unique(data.map((w) => w.wff_producent?.title)));
  };

  const handleCardClick = (slug: string) => {
    navigate(`/wine/${slug}`);
  };

  useEffect(() => {
    let filtered = wines;

    if (selectedCategory) {
      filtered = filtered.filter((w) => w.wff_varugrupp === selectedCategory);
    }
    if (selectedCountry) {
      filtered = filtered.filter((w) => w.wff_land === selectedCountry);
    }
    if (selectedProducer) {
      filtered = filtered.filter(
        (w) => w.wff_producent?.title === selectedProducer
      );
    }

    setFilteredWines(filtered);
  }, [selectedCategory, selectedCountry, selectedProducer, wines]);

  const chunkWines = (arr: WineProps[], size: number): WineProps[][] => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const wineRows = chunkWines(filteredWines, 4);

  return (
    <div>
      {loading && <p className="loading">Laddar...</p>}
      {error && <p className="error">{error}</p>}

      <section className="upper">
        <div className="wineHeader">
          <h2 className="frontpage-winesList">Våra viner</h2>
          <div className="filters">
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              <option value="">Varugrupp</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => setSelectedCountry(e.target.value)}
              value={selectedCountry}
            >
              <option value="">Välj land</option>
              {countries.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => setSelectedProducer(e.target.value)}
              value={selectedProducer}
            >
              <option value="">Välj producent</option>
              {producers.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="winesList">
        {wineRows.map((row, rowIndex) => (
          <div className="wineRow" key={rowIndex}>
            {row.map((wine, i) => (
              <div
                key={wine.id}
                className={`wineCardWrapper ${
                  i !== row.length - 1 ? "withBorderRight" : ""
                }`}
                onClick={() => handleCardClick(wine.slug)}
              >
                <WineCard
                  id={wine.id}
                  slug={wine.slug}
                  featured_image_url={wine.featured_image_url}
                  title={wine.title}
                  wff_producent={wine.wff_producent}
                  wff_pris={wine.wff_pris}
                  wff_kategori={wine.wff_kategori}
                />
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default WinesPage;
