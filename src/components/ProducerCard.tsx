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
    <article className="producer-card">
      <img
        src={featured_image_url}
        alt={title.rendered}
        className="producer-image"
      />
      <h3 className="producer-title">{title.rendered}</h3>
      <p className="producer-country">{producer_country}</p>
      <p className="producer-description">{producer_description}</p>
      <Link to={`/producer/${slug}`} className="producer-link">
        Läs mer
      </Link>
      <div className="card-divider" />
    </article>
  );
};

export default ProducerCard;
