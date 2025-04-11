import { WineProps } from "../types/Wines/WineProps";

const WineCard: React.FC<WineProps> = ({
  featured_image_url,
  title,
  wff_producent,
  wff_pris,
  wff_kategori,
}) => {
  return (
    <article>
      <img src={featured_image_url} alt={title.rendered} />
      <h3>{title.rendered}</h3>
      <p>{wff_producent}</p>
      <p>{wff_pris} kr</p>
      {wff_kategori == "Beställningssortiment" ? (
        <p>BS</p>
      ) : (
        <p>Privatimport</p>
      )}
    </article>
  );
};

export default WineCard;
