import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import { ContactPageData } from "../types/Interfaces-wp/ContactPage";

const ContactPage = () => {
  const [contactData, setContactData] = useState<ContactPageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const res = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/pages?slug=kontakt"
        );
        const data = await res.json();

        if (data.length > 0 && data[0].acf) {
          setContactData(data[0].acf as ContactPageData);
        } else {
          setError("Ingen data hittades.");
        }
      } catch (err) {
        console.error("Fel vid hämtning av kontaktdata:", err);
        setError("Kunde inte hämta data.");
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!contactData) return null;

  return (
    <div className="contact-page">
      <h1>Kontakt</h1>

      <ContactCard
        location={contactData.contact_one_location}
        name={contactData.contact_one_name}
        email={contactData.contact_one_email}
        phone={contactData.contact_one_number}
      />

      <hr className="section-divider divider" />

      <ContactCard
        location={contactData.contact_two_location}
        name={contactData.contact_two_name}
        email={contactData.contact_two_email}
        phone={contactData.contact_two_number}
      />

      <hr className="section-divider divider" />

      <ContactCard
        location={contactData.contact_three_location}
        name={contactData.contact_three_name}
        email={contactData.contact_three_email}
        phone={contactData.contact_three_number}
      />

      <hr className="section-divider divider" />

      <ContactCard
        location={contactData.contact_four_location}
        name={contactData.contact_four_name}
        email={contactData.contact_four_email}
        phone={contactData.contact_four_number}
      />

      <hr className="section-divider divider" />

      <ContactCard
        location={contactData.contact_five_location}
        name={contactData.contact_five_name}
        email={contactData.contact_five_email}
        phone={contactData.contact_five_number}
      />
    </div>
  );
};

export default ContactPage;
