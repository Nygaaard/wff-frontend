import React from "react";
import { Link } from "react-router-dom";
import { WineProps } from "../types/Wines/WineProps";
import { motion } from "framer-motion";

// Funktion för att avkoda HTML-entiteter
const decodeHtml = (html: string): string => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const WineCard: React.FC<WineProps> = ({
  id,
  slug,
  featured_image_url,
  title,
  wff_producent,
  wff_pris,
  wff_kategori,
}) => {
  // Hantera att featured_image_url kan vara en sträng eller ett objekt
  const imageUrl =
    typeof featured_image_url === "string"
      ? featured_image_url
      : featured_image_url?.url;

  const kategoriKort =
    wff_kategori === "Beställningssortiment" ? "BS" : "Privatimport";

  return (
    <motion.article
      className="card"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      role="article"
      aria-labelledby={`wine-title-${id}`}
    >
      <Link to={`/wine/${slug}`} className="wine-card-link">
        <img
          src={imageUrl}
          alt={decodeHtml(title?.rendered || "Vinbild")}
          className="image"
          loading="lazy"
          width="300"
          height="400"
        />
        <div className="wine-card-content">
          <h3 id={`wine-title-${id}`} className="title">
            {decodeHtml(title?.rendered || "Titel saknas")}
          </h3>
          <p className="text">{wff_producent?.title || "Ingen producent"}</p>
          <div className="priceCategory">
            <span className="price">{wff_pris}</span>
            <span
              className={`kategori-tag ${
                kategoriKort === "BS" ? "bs" : "privatimport"
              }`}
            >
              {kategoriKort}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default WineCard;
