import WineCard from "../components/WineCard";
import { useState, useEffect } from "react";
import { WineProps } from "../types/Wines/WineProps";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

        setWines(data);
        setFilteredWines(data);
        extractFilterOptions(data);
      } catch {
        setError("Något gick fel vid hämtning av viner...");
      } finally {
        setLoading(false);
      }
    };

    window.scrollTo(0, 0);
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
            <motion.select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <option value="">Varugrupp</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </motion.select>
            <motion.select
              onChange={(e) => setSelectedCountry(e.target.value)}
              value={selectedCountry}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <option value="">Välj land</option>
              {countries.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </motion.select>
            <motion.select
              onChange={(e) => setSelectedProducer(e.target.value)}
              value={selectedProducer}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <option value="">Välj producent</option>
              {producers.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </motion.select>
          </div>
        </div>
      </section>

      <section className="winesList">
        {wineRows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="wineRow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
          >
            {row.map((wine, i) => (
              <motion.div
                key={wine.id}
                className={`wineCardWrapper ${
                  i !== row.length - 1 ? "withBorderRight" : ""
                }`}
                onClick={() => handleCardClick(wine.slug)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <WineCard {...wine} />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default WinesPage;
