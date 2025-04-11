import { ProducerI } from "../types/Producers/ProducerInterface";

const SpecificProducerCard: React.FC<ProducerI> = ({
  title,
  producer_country,
  producer_description,
  featured_image_url,
}) => {
  return (
    <article className="specificProducerCard">
      <div className="specificProducerContainer">
        <div className="specificProducerWrapper">
          <h3 className="specificProducerTitle">{title.rendered}</h3>
          <div className="diver">
            <p className="specificProducerCountry">{producer_country}</p>
          </div>
        </div>
        <p className="specificProducerDescription">{producer_description}</p>
      </div>

      {featured_image_url && (
        <img
          src={featured_image_url}
          alt={title.rendered}
          className="specificProducerImage"
        />
      )}
    </article>
  );
};

export default SpecificProducerCard;
