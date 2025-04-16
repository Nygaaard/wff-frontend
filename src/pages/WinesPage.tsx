import WineCard from "../components/WineCard";
import { useState, useEffect } from "react";
import { WineProps } from "../types/Wines/WineProps";
import { useNavigate } from "react-router-dom";

const WinesPage = () => {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/wine"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setWines(data);
      } catch {
        setError("Något gick fel vid hämtning av viner...");
      } finally {
        setLoading(false);
      }
    };

    fetchWines();
  }, []);

  const handleCardClick = (slug: string) => {
    navigate(`/wine/${slug}`);
  };

  const chunkWines = (arr: WineProps[], size: number): WineProps[][] => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const wineRows = chunkWines(wines, 4); // 4 per rad

  return (
    <div>
      {loading && <p className="loading">Laddar...</p>}
      {error && <p className="error">{error}</p>}

      <section className="upper">
        <h2>Våra viner</h2>
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
