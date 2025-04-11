import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProducerI } from "../types/Producers/ProducerInterface";
import SpecificProducerCard from "../components/specificProducerCard"; // Uppdaterad till versal

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
      <SpecificProducerCard
        id={producer.id}
        key={producer.id}
        title={producer.title}
        producer_country={producer.producer_country}
        producer_description={producer.producer_description}
        featured_image_url={producer.featured_image_url}
        slug={producer.slug}
      />
    </div>
  );
};

export default ProducerPage;
