import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { WineProps } from "../types/Wines/WineProps";
import SpecificWineCard from "../components/specificWineCard"; // Se till att använda korrekt namn

const WinePage = () => {
  const { slug } = useParams();
  const [wine, setWine] = useState<WineProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWine = async () => {
      try {
        const response = await fetch(
          `http://localhost/wine_for_friends/wp-json/wp/v2/wine?slug=${slug}`
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        if (!data.length) {
          setError("Kunde inte hitta vinet.");
          return;
        }

        setWine(data[0]); // sätter det första objektet i data-arrayen
      } catch {
        setError("Något gick fel vid hämtning av vinet.");
      } finally {
        setLoading(false);
      }
    };

    window.scrollTo(0, 0);
    fetchWine();
  }, [slug]);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>{error}</p>;

  return <div>{wine && <SpecificWineCard {...wine} />} </div>;
};

export default WinePage;
