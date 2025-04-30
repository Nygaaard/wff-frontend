const ContactCard = ({
  location,
  name,
  email,
  phone,
}: {
  location: string;
  name: string;
  email: string;
  phone: string;
}) => {
  return (
    <div className="location-block">
      <h2>{location}</h2>
      <div className="contact-person">
        <p className="name">{name}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
