import { useEffect, useState } from "react";
import ProducerCard from "../components/ProducerCard";
import { ProducerI } from "../types/Producers/ProducerInterface";

const ProducersPage: React.FC = () => {
  const [producers, setProducers] = useState<ProducerI[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducers = async () => {
      try {
        const response = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/producer"
        );

        if (!response.ok) {
          throw new Error("Det gick inte att hämta producenter.");
        }

        const data = await response.json();
        setProducers(data);
      } catch {
        setError("Något gick fel vid hämtning av producenter...");
      } finally {
        setLoading(false);
      }
    };

    fetchProducers();
  }, []); // Beroende array gör att fetch körs endast när komponenten mountas

  return (
    <div>
      {loading && <p>Laddar...</p>}
      {error && <p>{error}</p>}

      <section className="producersIntro">
        <h2>Producenter</h2>
        <div>
          <p>
            Wine for friends är idag stolta över att få samarbeta med lite fler
            än en handful fantastiska vinproducenter. Samtliga producenter
            värdesätter kvalitet framför kvantitet och vi kan gladeligen och med
            stolthet säga att vi njuter av samtliga viner själva.
            <br />
            <br />
            Vi arbetar aktivt med att hitta nya partners så håll utkik efter nya
            roliga producenter och tillhörande viner.
          </p>
        </div>
      </section>
      <h3 className="ourProducers">Våra producenter</h3>
      <hr className="line" />
      <section className="producersList">
        {producers.map((producer) => (
          <ProducerCard
            id={producer.id}
            key={producer.id}
            featured_image_url={producer.featured_image_url}
            title={producer.title}
            producer_country={producer.producer_country}
            producer_description={producer.producer_description}
            slug={producer.slug}
          />
        ))}
      </section>
    </div>
  );
};

export default ProducersPage;
