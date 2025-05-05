import { useState } from "react";
import footerImageOne from "../assets/images/footer-image1.png";
import footerImageTwo from "../assets/images/footer-image2.png";
import footerImageThree from "../assets/images/footer-image3.png";
import footerIconLeft from "../assets/images/footer-icon-left.png";
import footerIconRight from "../assets/images/footer-icon-right.png";
import wineForFriends from "../assets/images/wine-for-friends.png";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!email) {
      setMessage("Vänligen ange en e-postadress.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost/wine_for_friends/wp-json/vinklubb/v1/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage("Tack för att du registrerat dig!");
      } else {
        setMessage(result.message || "Något gick fel, försök igen.");
      }
    } catch {
      setMessage("Fel vid anslutning till servern. Försök igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="wineclub-section">
        <div className="left">
          <h4>Vinklubben</h4>
          <p>
            Genom vår vinklubb får du inspiration, spännande vinkunskap och tips
            som gör dina vinupplevelser ännu rikare. Ibland bjuder vi in till
            provningar och andra små äventyr i vinets värld. Registrera dig med
            din e-postadress för att få nyheter och uppdateringar.
          </p>
          <div className="email-input-wrapper">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Din e-postadress"
            />
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? "Registrerar..." : "Registrera"}
            </button>
          </div>
          {message && <p className="message">{message}</p>}{" "}
        </div>
        <div className="right">
          <img
            src={footerImageOne}
            alt="Vinklubben 1"
            className="bottle bottom"
          />
          <img src={footerImageTwo} alt="Vinklubben 2" className="bottle top" />
          <img
            src={footerImageThree}
            alt="Vinklubben 3"
            className="bottle bottom"
          />
        </div>
      </section>
      <section className="footer-bottom">
        <div className="email-text">
          <p>info@wineforfriends.se</p>
        </div>

        <div className="vector-wrapper">
          <img src={footerIconLeft} alt="Vektor 1" />
          <img src={footerIconRight} alt="Vektor 2" />
        </div>

        <div className="logo-bottom">
          <img src={wineForFriends} alt="Footer logotyp" />
        </div>
      </section>
    </div>
  );
};

export default Footer;
