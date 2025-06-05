import React from "react";
import { Link } from "react-router-dom";
import { WineProps } from "../types/Wines/WineProps";

const WineCard: React.FC<WineProps & { eager?: boolean }> = ({
  slug,
  featured_image_url,
  title,
  wff_pris,
  eager = false,
}) => {
  const imageUrl =
    typeof featured_image_url === "string"
      ? featured_image_url
      : featured_image_url.sizes?.medium || featured_image_url.url;

  const srcSet =
    typeof featured_image_url === "object" && featured_image_url.sizes
      ? `
        ${featured_image_url.sizes.thumbnail ?? ""} 150w,
        ${featured_image_url.sizes.medium ?? ""} 300w,
        ${featured_image_url.sizes.large ?? ""} 1024w,
        ${featured_image_url.url} 2048w
      `
      : undefined;

  const altText =
    typeof featured_image_url === "object"
      ? featured_image_url.alt || title.rendered
      : title.rendered;

  return (
    <Link to={`/wine/${slug}`} className="wine-card-link">
      <div className="card">
        <img
          src={imageUrl}
          srcSet={srcSet}
          sizes="(max-width: 640px) 150px, (max-width: 1024px) 300px, 400px"
          alt={altText}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          width={300}
          height={400}
          className="image"
        />
        <div className="card-info">
          <h4 className="title">{title.rendered}</h4>
          <p className="price">{wff_pris}</p>
        </div>
      </div>
    </Link>
  );
};

export default WineCard;
