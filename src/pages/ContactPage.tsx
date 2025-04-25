const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Kontakt</h1>

      <div className="location-block">
        <h2>ÅRE</h2>
        <div className="contact-person">
          <p className="name">Anders Bromander</p>
          <p>
            <a href="mailto:anders@wineforfriends.se">
              anders@wineforfriends.se
            </a>
          </p>
          <p>
            <a href="tel:0738762242">073-876 22 42</a>
          </p>
        </div>
      </div>

      <hr className="section-divider divider" />

      <div className="location-block">
        <h2>VÄSTERÅS</h2>
        <div className="contact-person">
          <p className="name">Max Svärd</p>
          <p>
            <a href="mailto:max@wineforfriends.se">max@wineforfriends.se</a>
          </p>
          <p>
            <a href="tel:0735446631">073-544 66 31</a>
          </p>
        </div>
      </div>

      <hr className="section-divider divider" />

      <div className="location-block">
        <h2>STOCKHOLM</h2>
        <div className="contact-person">
          <p className="name">Tony Kirmo</p>
          <p>
            <a href="mailto:tony@wineforfriends.se">tony@wineforfriends.se</a>
          </p>
          <p>
            <a href="tel:0704288041">070-428 80 41</a>
          </p>
        </div>
        <div className="contact-person">
          <p className="name">Tomas Bromander</p>
          <p>
            <a href="mailto:tomas@wineforfriends.se">tomas@wineforfriends.se</a>
          </p>
          <p>
            <a href="tel:0708559925">070-855 99 25</a>
          </p>
        </div>
      </div>

      <hr className="section-divider divider" />

      <div className="location-block">
        <h2>HELSINGBORG</h2>
        <div className="contact-person">
          <p className="name">Daniel Stenberg</p>
          <p>
            <a href="mailto:daniel@wineforfriends.se">
              daniel@wineforfriends.se
            </a>
          </p>
          <p>
            <a href="tel:0729836585">072-983 65 85</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
