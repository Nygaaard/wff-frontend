import { WineProps } from "../types/Wines/WineProps";

const WineCard: React.FC<WineProps> = ({
  featured_image_url,
  title,
  wff_producent,
  wff_pris,
  wff_kategori,
}) => {
  return (
    <article className="card">
      <img className="image" src={featured_image_url} alt={title.rendered} />
      <h3 className="title">{title.rendered}</h3>
      <p className="text">{wff_producent}</p>
      <div className="priceCategory">
        <span>{wff_pris} kr</span>
        <span>
          {wff_kategori === "Beställningssortiment" ? "BS" : "Privatimport"}
        </span>
      </div>
    </article>
  );
};

export default WineCard;
