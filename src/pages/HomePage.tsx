import image from "../assets/images/Frontpage.jpg";
import frontpageAboutImage from "../assets/images/Frontpage-about.png";
import WineCard from "../components/WineCard";
import { WineProps } from "../types/Wines/WineProps";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import insta1 from "../assets/images/insta1.png";
import insta2 from "../assets/images/insta2.png";
import insta3 from "../assets/images/insta3.png";
import insta4 from "../assets/images/insta4.png";
import insta5 from "../assets/images/insta5.png";
import insta6 from "../assets/images/insta6.png";
import { HomePageAboutSection } from "../types/Interfaces-wp/HomePage-about";

const HomePage = () => {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [aboutSection, setAboutSection] = useState<HomePageAboutSection | null>(
    null
  );

  // Hämta viner
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

  // Hämta About-sektionen
  useEffect(() => {
    const fetchAboutSection = async () => {
      try {
        const res = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/pages?slug=startsida-om"
        );
        const data = await res.json();
        if (data.length > 0) {
          const aboutData = data[0]?.acf;

          setAboutSection({
            title: aboutData?.about_heading || "Default Title",
            subtitle: aboutData?.about_subheading || "Default Subtitle",
            content: aboutData?.about_text || "Default content text",
            image: {
              url: aboutData?.about_image?.url || frontpageAboutImage,
              alt: aboutData?.about_image?.alt || "Default image",
            },
          });
        }
      } catch (error) {
        console.error("Kunde inte hämta om-sektionen", error);
      }
    };

    fetchAboutSection();
  }, []);

  return (
    <div>
      <section className="frontpage-upper-slice">
        <img src={image} alt="Friends" className="frontpage-image" />
        <div className="frontpage-info">
          <p>
            Ett namn som talar för sig självt och speglar vår filosofi. Vi tror
            att vin är som bäst när det delas – oavsett om det är med gamla
            vänner, nya bekantskaper, kollegor eller familj. Det viktiga är de
            stunder som uppstår, där samtalen flödar och gemenskapen växer
          </p>
        </div>
      </section>

      <section className="upper">
        <div className="wineHeader">
          <h2 className="frontpage-winesList">Våra viner</h2>
          <Link to="/wines" className="allWinesLink">
            Alla våra viner
          </Link>
        </div>
      </section>

      {loading && <p>Laddar...</p>}
      {error && <p className="error">{error}</p>}

      <section className="winesList">
        <div className="wineRow">
          {wines.slice(0, 4).map((wine, i) => (
            <div
              key={wine.id}
              className={`wineCardWrapper ${i !== 3 ? "withBorderRight" : ""}`}
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
      </section>

      {aboutSection && (
        <section className="frontpage-about-slice">
          <h3>
            {aboutSection.title}
            <br />
            <span className="h3-under">{aboutSection.subtitle}</span>
          </h3>
          <div className="frontpage-about">
            <img
              src={aboutSection.image.url}
              alt={aboutSection.image.alt}
              className="frontpage-about-image"
            />
            <div className="frontpage-about-div">
              <p>{aboutSection.content}</p>
              <Link to="/about" className="link">
                Läs mer om oss
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="instagram-section">
        <hr className="horizontal-line" />
        <div className="instagram-text-container">
          <h3 className="instagram-title">Följ oss på Instagram</h3>
          <p className="instagram-handle">@wineforfriends.se</p>
        </div>
        <div className="instagram-carousel">
          {[insta1, insta2, insta3, insta4, insta5, insta6].map((src, i) => (
            <div className="carousel-image" key={i}>
              <img src={src} alt={`Instagram ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
