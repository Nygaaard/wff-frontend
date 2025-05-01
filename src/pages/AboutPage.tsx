import { useEffect, useState } from "react";
import { AboutPageData } from "../types/Interfaces-wp/AboutPage";

const AboutWFF = () => {
  const [aboutData, setAboutData] = useState<AboutPageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/pages?slug=om-oss"
        );
        const data = await res.json();

        if (data.length > 0 && data[0].acf) {
          setAboutData(data[0].acf as AboutPageData);
        } else {
          setError("Ingen data hittades.");
        }
      } catch (err) {
        console.error("Fel vid hämtning av om-sidan:", err);
        setError("Kunde inte hämta data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!aboutData) return null;

  return (
    <div className="about-wff">
      <section className="intro">
        <h1>{aboutData.about_heading}</h1>
        <p>{aboutData.about_paragraph_one}</p>
        <hr className="section-divider" />
        <div className="image-row">
          {[
            aboutData.about_image_one,
            aboutData.about_image_two,
            aboutData.about_image_three,
          ].map(
            (img, i) =>
              img?.url && (
                <img key={i} src={img.url} alt={img.alt || `Bild ${i + 1}`} />
              )
          )}
        </div>
        <hr />
        <p>{aboutData.about_paragraph_two}</p>
      </section>

      <hr className="section-divider" />

      <section className="producers">
        <h2>Lite om våra nya vänner</h2>
        <div className="producers-content">
          <ul>
            {aboutData.about_producers &&
              aboutData.about_producers
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line, index) => {
                  const [title, ...rest] = line.split("–");
                  return (
                    <li key={index}>
                      <strong>{title.trim()}</strong>
                      {rest.length > 0 ? ` – ${rest.join("–").trim()}` : ""}
                    </li>
                  );
                })}
          </ul>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="team-signature">
        <p className="signature">{aboutData.about_signature}</p>
      </section>
    </div>
  );
};

export default AboutWFF;
