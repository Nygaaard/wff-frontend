import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProducerI } from "../types/Producers/ProducerInterface";

const ProducerPage: React.FC = () => {
  const { slug } = useParams();
  const [producer, setProducer] = useState<ProducerI | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>{error}</p>;

  if (!producer) return <p>Producenten hittades inte.</p>;

  return (
    <div>
      <h2>{producer.title.rendered}</h2>
      <img src={producer.featured_image_url} alt={producer.title.rendered} />
      <p>{producer.producer_description}</p>
    </div>
  );
};

export default ProducerPage;
