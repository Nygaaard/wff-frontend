import { useEffect, useState } from "react";
import ProducerCard from "../components/ProducerCard";
import { ProducerI } from "../types/Producers/ProducerInterface";
import { ProducersIntro } from "../types/Interfaces-wp/ProducersIntro";

const ProducersPage: React.FC = () => {
  const [producers, setProducers] = useState<ProducerI[]>([]);
  const [intro, setIntro] = useState<ProducersIntro | null>(null);
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

    const fetchIntro = async () => {
      try {
        const res = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/pages?slug=producenter-intro"
        );
        const data = await res.json();
        setIntro(data[0]?.acf);
      } catch (error) {
        console.error(
          "Kunde inte hämta introduktionstext för producenter:",
          error
        );
      }
    };

    fetchProducers();
    fetchIntro();
  }, []);

  const getShortDescription = (text: string): string => {
    const sentence = text.match(/[^.!?]*[.!?]/g);
    if (sentence && sentence.length > 0) {
      return sentence[0];
    }
    return text;
  };

  return (
    <div className="producers-page">
      {loading && <p>Laddar...</p>}
      {error && <p>{error}</p>}

      {intro && (
        <section className="producers-intro">
          <h2>{intro.producers_intro_heading}</h2>
          <div>
            <p>{intro.producers_intro_content}</p>
          </div>
        </section>
      )}

      <h3 className="our-producers">Våra producenter</h3>
      <hr className="section-divider" />

      <section className="producers-list">
        {producers.map((producer) =>
          producer.featured_image_url && producer.title ? (
            <ProducerCard
              id={producer.id}
              key={producer.id}
              featured_image_url={producer.featured_image_url}
              title={producer.title}
              producer_country={producer.producer_country}
              producer_description={getShortDescription(
                producer.producer_description
              )}
              slug={producer.slug}
            />
          ) : null
        )}
      </section>
    </div>
  );
};

export default ProducersPage;
