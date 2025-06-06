import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WineCard from "../components/WineCard";
import AgeController from "../components/AgeController";

import { WineProps } from "../types/Wines/WineProps";
import { HomePageAboutSection } from "../types/Interfaces-wp/HomePage-about";
import { HeroSection } from "../types/Interfaces-wp/HomePage-hero";

import image from "../assets/images/Frontpage.jpg";
import frontpageAboutImage from "../assets/images/Frontpage-about.png";

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const containerVariant = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const [heroSection, setHeroSection] = useState<HeroSection | null>(null);
  const [aboutSection, setAboutSection] = useState<HomePageAboutSection | null>(
    null
  );
  const [instagramImages, setInstagramImages] = useState<
    { url: string; alt: string }[]
  >([]);
  const [wines, setWines] = useState<WineProps[]>([]);
  const [loadingAbout, setLoadingAbout] = useState(true);
  const [loadingWines, setLoadingWines] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAgeGate, setShowAgeGate] = useState(false);

  useEffect(() => {
    const confirmed = localStorage.getItem("ageConfirmed");
    if (!confirmed) {
      setShowAgeGate(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("ageConfirmed", "true");
    setShowAgeGate(false);
  };

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/pages?slug=startsida-hero"
        );
        const data = await res.json();
        const acf = data[0]?.acf;

        setHeroSection({
          text: acf?.hero_text || "Default hero text",
          image: {
            url: acf?.hero_image?.url || image,
            alt: acf?.hero_image?.alt || "Hero image",
          },
        });
      } catch {
        setError("Kunde inte ladda hero-sektionen.");
      }
    };
    fetchHero();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!heroSection) return;

    const fetchOtherData = async () => {
      try {
        const [winesRes, aboutRes] = await Promise.all([
          fetch("http://localhost/wine_for_friends/wp-json/wp/v2/wine"),
          fetch(
            "http://localhost/wine_for_friends/wp-json/wp/v2/pages?slug=startsida"
          ),
        ]);

        if (!winesRes.ok || !aboutRes.ok) throw new Error();

        const winesData = await winesRes.json();
        const aboutData = await aboutRes.json();
        const aboutAcf = aboutData[0]?.acf;

        setWines(winesData);

        setAboutSection({
          title: aboutAcf?.about_heading || "Default Title",
          subtitle: aboutAcf?.about_subheading || "Default Subtitle",
          content: aboutAcf?.about_text || "Default content",
          image: {
            url: aboutAcf?.about_image?.url || frontpageAboutImage,
            alt: aboutAcf?.about_image?.alt || "Default image",
          },
        });
      } catch {
        setError("Kunde inte ladda viner eller about-sektionen.");
      } finally {
        setLoadingWines(false);
        setLoadingAbout(false);
      }
    };

    fetchOtherData();
  }, [heroSection]);

  useEffect(() => {
    const fetchInstagramImages = async () => {
      try {
        const res = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/pages?slug=startsida-instagram"
        );
        const data = await res.json();
        const acf = data[0]?.acf;

        // Explicit typ för arrayen för att undvika implicit any
        const imagesArray: { url: string; alt: string }[] = [];

        if (acf) {
          [
            "image_one",
            "image_two",
            "image_three",
            "image_four",
            "image_five",
            "image_six",
          ].forEach((key) => {
            if (acf[key]?.url) {
              imagesArray.push({
                url: acf[key].url,
                alt: acf[key].alt || "Instagram image",
              });
            }
          });
        }

        setInstagramImages(imagesArray);
      } catch (error) {
        console.error("Kunde inte hämta Instagram-bilder:", error);
      }
    };

    fetchInstagramImages();
  }, []);

  if (showAgeGate) {
    return <AgeController onConfirm={handleConfirm} />;
  }

  return (
    <div>
      {heroSection && (
        <motion.section
          className="frontpage-upper-slice"
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroSection.image.url}
            alt={heroSection.image.alt}
            className="frontpage-image"
            loading="eager"
            fetchPriority="high"
          />
          <div className="frontpage-info">
            <p>{heroSection.text}</p>
          </div>
        </motion.section>
      )}

      <motion.section
        className="upper"
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="wineHeader">
          <h2 className="frontpage-winesList">Våra viner</h2>
          <Link to="/wines" className="allWinesLink">
            Alla våra viner
          </Link>
        </div>
      </motion.section>

      {loadingWines && <p>Laddar viner...</p>}
      {error && <p className="error">{error}</p>}

      {!loadingWines && wines.length > 0 && (
        <motion.section
          className="winesList"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className="wineRow" variants={containerVariant}>
            {wines.slice(0, 4).map((wine, i) => (
              <motion.div
                key={wine.id}
                variants={childVariant}
                className={`wineCardWrapper ${
                  i !== 3 ? "withBorderRight" : ""
                }`}
              >
                <WineCard {...wine} eager={i === 0} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {!loadingAbout && aboutSection && (
        <motion.section
          className="frontpage-about-slice"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
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
              loading="lazy"
            />
            <div className="frontpage-about-div">
              <p>{aboutSection.content}</p>
              <Link to="/about" className="link">
                Läs mer om oss
              </Link>
            </div>
          </div>
        </motion.section>
      )}

      <motion.section
        className="instagram-section"
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <hr className="horizontal-line" />
        <div className="instagram-text-container">
          <h3 className="instagram-title">Följ oss på Instagram</h3>
          <p className="instagram-handle">@wineforfriends.se</p>
        </div>
        <div className="instagram-carousel">
          {instagramImages.length > 0 ? (
            instagramImages.map((img, i) => (
              <div className="carousel-image" key={i}>
                <img
                  src={img.url}
                  alt={img.alt || `Instagram ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))
          ) : (
            <p>Inga Instagram-bilder tillgängliga just nu.</p>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
