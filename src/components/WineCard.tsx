import { WineProps } from "../types/Wines/WineProps";
import { motion } from "framer-motion";

// Funktion för att avkoda HTML-entiteter
const decodeHtml = (html: string): string => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const WineCard: React.FC<WineProps> = ({
  featured_image_url,
  title,
  wff_producent,
  wff_pris,
  wff_kategori,
}) => {
  return (
    <motion.article
      className="card"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <img
        className="image"
        src={featured_image_url}
        alt={decodeHtml(title?.rendered || "")}
      />
      <h3 className="title">{decodeHtml(title?.rendered || "Titel saknas")}</h3>
      <p className="text">{wff_producent?.title || "Ingen producent"}</p>
      <div className="priceCategory">
        <span>{wff_pris}</span>
        <span>
          {wff_kategori === "Beställningssortiment" ? "BS" : "Privatimport"}
        </span>
      </div>
    </motion.article>
  );
};

export default WineCard;
