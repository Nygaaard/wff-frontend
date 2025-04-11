import { ProducerI } from "../types/Producers/ProducerInterface";
import { Link } from "react-router-dom";

const ProducerCard: React.FC<ProducerI> = ({
  featured_image_url,
  title,
  producer_country,
  producer_description,
  slug,
}) => {
  return (
    <article className="producerCard">
      <img
        src={featured_image_url}
        alt={title.rendered}
        className="producerImage"
      />
      <h3 className="producerTitle">{title.rendered}</h3>
      <p className="producerCountry">{producer_country}</p>
      <p className="producerDescription">{producer_description}</p>
      <Link to={`/producer/${slug}`} className="producerLink">
        Läs mer
      </Link>
    </article>
  );
};

export default ProducerCard;
