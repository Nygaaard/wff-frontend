import footerImageOne from "../assets/images/footer-image1.png";
import footerImageTwo from "../assets/images/footer-image2.png";
import footerImageThree from "../assets/images/footer-image3.png";
import footerIconLeft from "../assets/images/footer-icon-left.png";
import footerIconRight from "../assets/images/footer-icon-right.png";
import wineForFriends from "../assets/images/wine-for-friends.png";

const Footer = () => {
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
            <input type="email" placeholder="Din e-postadress" />
            <button>Registrera</button>
          </div>
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
