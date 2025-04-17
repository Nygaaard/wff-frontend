import { ProducerI } from "../types/Producers/ProducerInterface";

const SpecificProducerCard: React.FC<ProducerI> = ({
  title,
  producer_country,
  producer_description,
  featured_image_url,
}) => {
  return (
    <article className="specificProducerCard">
      <section className="producerHeader">
        <div className="producerText">
          <h2 className="title">{title.rendered}</h2>
          <p className="country">{producer_country}</p>
        </div>
        <div className="descriptionWrapper">
          <p className="description">{producer_description}</p>
        </div>
      </section>

      {featured_image_url && (
        <img
          src={featured_image_url}
          alt={title.rendered}
          className="fullWidthImage"
        />
      )}
    </article>
  );
};

export default SpecificProducerCard;
