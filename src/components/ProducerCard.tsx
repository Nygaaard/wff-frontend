import { ProducerI } from "../types/Producers/ProducerInterface";
import { Link } from "react-router-dom";

const ProducerCard: React.FC<ProducerI> = ({
  featured_image_url,
  title,
  producer_description,
  slug,
}) => {
  return (
    <article>
      <img src={featured_image_url} alt={title.rendered} />
      <h3>{title.rendered}</h3>
      <p>{producer_description}</p>
      <Link to={`/producer/${slug}`}>Läs mer</Link>
    </article>
  );
};

export default ProducerCard;
