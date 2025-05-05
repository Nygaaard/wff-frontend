import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProducerI } from "../types/Producers/ProducerInterface";
import { WineProps } from "../types/Wines/WineProps";
import SpecificProducerCard from "../components/specificProducerCard";
import WineCard from "../components/WineCard";

const ProducerPage: React.FC = () => {
  const { slug } = useParams();
  const [producer, setProducer] = useState<ProducerI | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [producerWines, setProducerWines] = useState<WineProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducer = async () => {
      if (slug) {
        try {
          const response = await fetch(
            `http://localhost/wine_for_friends/wp-json/wp/v2/producer?slug=${slug}`
          );

          if (!response.ok) {
            throw new Error("Det gick inte att hämta producent.");
          }

          const data = await response.json();
          setProducer(data[0]);
        } catch {
          setError("Något gick fel vid hämtning av producent.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducer();
  }, [slug]);

  useEffect(() => {
    const fetchProducerWines = async () => {
      if (producer) {
        try {
          const response = await fetch(
            "http://localhost/wine_for_friends/wp-json/wp/v2/wine"
          );
          const data = await response.json();
          const filtered = data.filter(
            (wine: WineProps) =>
              wine.wff_producent.title === producer.title.rendered
          );
          setProducerWines(filtered);
        } catch {
          console.error("Kunde inte hämta viner");
        }
      }
    };

    window.scrollTo(0, 0);
    fetchProducerWines();
  }, [producer]);

  const chunkWines = (arr: WineProps[], size: number): WineProps[][] => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>{error}</p>;
  if (!producer) return <p>Producenten hittades inte.</p>;

  return (
    <div className="producer-container">
      <SpecificProducerCard
        id={producer.id}
        key={producer.id}
        title={producer.title}
        producer_country={producer.producer_country}
        producer_description={producer.producer_description}
        featured_image_url={producer.featured_image_url}
        slug={producer.slug}
      />
      <h3>Våra viner från {producer.title.rendered}</h3>
      {producerWines.length > 0 ? (
        <section className="winesList">
          {chunkWines(producerWines, 4).map((row, rowIndex) => (
            <div className="wineRow" key={rowIndex}>
              {row.map((wine, i) => (
                <div
                  key={wine.id}
                  className={`wineCardWrapper ${
                    i !== row.length - 1 ? "withBorderRight" : ""
                  }`}
                  onClick={() => navigate(`/wine/${wine.slug}`)}
                >
                  <WineCard {...wine} />
                </div>
              ))}
            </div>
          ))}
        </section>
      ) : (
        <p>Inga viner hittades för denna producent.</p>
      )}
    </div>
  );
};

export default ProducerPage;
