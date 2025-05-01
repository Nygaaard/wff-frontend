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
import { HeroSection } from "../types/Interfaces-wp/HomePage-hero";

const HomePage = () => {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [aboutSection, setAboutSection] = useState<HomePageAboutSection | null>(
    null
  );
  const [heroSection, setHeroSection] = useState<HeroSection | null>(null);

  // Hämta viner
  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/wine"
        );
        if (!response.ok) throw new Error();
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

  // Hämta Hero-sektionen
  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const res = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/pages?slug=startsida-hero"
        );
        const data = await res.json();

        if (data.length > 0) {
          const acf = data[0]?.acf;

          setHeroSection({
            text: acf?.hero_text || "Default hero text",
            image: {
              url: acf?.hero_image?.url || image,
              alt: acf?.hero_image?.alt || "Hero image",
            },
          });
        }
      } catch (error) {
        console.error("Kunde inte hämta hero-sektionen", error);
      }
    };

    fetchHeroSection();
  }, []);

  // Hämta About-sektionen
  useEffect(() => {
    const fetchAboutSection = async () => {
      try {
        const res = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/pages?slug=startsida"
        );
        const data = await res.json();

        if (data.length > 0) {
          const acf = data[0]?.acf;

          setAboutSection({
            title: acf?.about_heading || "Default Title",
            subtitle: acf?.about_subheading || "Default Subtitle",
            content: acf?.about_text || "Default content text",
            image: {
              url: acf?.about_image?.url || frontpageAboutImage,
              alt: acf?.about_image?.alt || "Default image",
            },
          });
        }
      } catch (error) {
        console.error("Kunde inte hämta about-sektionen", error);
      }
    };

    fetchAboutSection();
  }, []);

  return (
    <div>
      {heroSection && (
        <section className="frontpage-upper-slice">
          <img
            src={heroSection.image.url}
            alt={heroSection.image.alt}
            className="frontpage-image"
          />
          <div className="frontpage-info">
            <p>{heroSection.text}</p>
          </div>
        </section>
      )}

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
