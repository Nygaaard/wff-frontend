import WineCard from "../components/WineCard";
import { useState, useEffect } from "react";
import { WineProps } from "../types/Wines/WineProps";
import { useNavigate } from "react-router-dom"; // ändrat här

const WinesPage = () => {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // ny hook

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

  const handleCardClick = (id: number) => {
    navigate(`/wine/${id}`);
  };

  return (
    <div>
      {loading && <p>Laddar...</p>}
      {error && <p>{error}</p>}

      <section className="upper">
        <h2>Våra viner</h2>
      </section>

      <section className="winesList">
        {wines.map((wine) => (
          <div
            key={wine.id}
            onClick={() => handleCardClick(wine.id)}
            style={{ cursor: "pointer" }}
          >
            <WineCard
              id={wine.id}
              featured_image_url={wine.featured_image_url}
              title={wine.title}
              wff_producent={wine.wff_producent}
              wff_pris={wine.wff_pris}
              wff_kategori={wine.wff_kategori}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default WinesPage;
