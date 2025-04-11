import { WineI } from "../types/Wines/WineInterface";

const WineCard: React.FC<WineI> = ({
  featured_image_url,
  title,
  wff_producent,
  wff_pris,
}) => {
  return (
    <article>
      <img src={featured_image_url} alt={title.rendered} />
      <h3>{title.rendered}</h3>
      <p>{wff_producent}</p>
      <p>{wff_pris}</p>
    </article>
  );
};

export default WineCard;
