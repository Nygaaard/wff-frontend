import img1 from "../assets/images/wff-about-one.jpg";
import img2 from "../assets/images/wff-about-two.png";
import img3 from "../assets/images/wff-about-three.png";

const AboutWFF = () => {
  return (
    <div className="about-wff">
      <section className="intro">
        <h1>Wine for friends</h1>
        <p>
          Ett ganska straight forward namn och som förkroppsligar hela vår idé.
          Vi tycker att vin görs sig bäst i sällskap, vara sig det är med gamla
          eller nya vänner, kollegor eller familj – så länge det där goda
          samtalet uppstår.
        </p>
        <p>
          Vi är ett gäng vinglada vänner som startade Wine for friends över en
          middag och ett antal bättre pavor vin på restaurang Granen i Åre. Vi
          är inte bara passionerade i vin utan skidåkning ligger oss också varmt
          om hjärtat varför det känns naturligt att vår resa startade i just
          Åre.
        </p>
        <hr />
        <div className="image-row">
          <img src={img1} alt="Team at Granen" />
          <img src={img2} alt="Wine for Friends group" />
          <img src={img3} alt="Wine moment" />
        </div>
        <hr />
        <p>
          För oss handlar vin om gemenskap och vi försöker låta det “rinna” som
          en röd tråd i allt vi gör. Vi strävar efter att ha roligt tillsammans,
          respektera varandra och vara passionerade. Det vill vi att ni alla
          skall uppleva oavsett om du är vinmakare, sommelier, eller en glad
          amatör som “bara” gillar grymma viner.
        </p>
        <p>
          Vi hoppas ni kommer uppskatta vinerna vi har fått förtroendet att
          representera och tveka inte att höra er till oss om ni vill veta mer
          om vinerna – eller kanske har ni ett bra tips!
        </p>
      </section>

      <hr />

      <section className="producers">
        <h2>Lite om våra nya vänner</h2>
        <ul>
          <li>
            <strong>Abruzzo</strong> – varför kanske ni tänker? Just därför.
            Mazzarosa lärde vi känna på WFF:s första vinresa och det sa ”klick”.
          </li>
          <li>
            <strong>Puglia</strong> – okej, det är ju knappast Toscana eller
            Piemonte – men så jäkla gött att Italiens bästa Rosato görs av en
            Australiensare nere i klacken.
          </li>
          <li>
            <strong>Kalifornien</strong> – make more sense, eller? Vi har alltid
            gillat jänkare – och när vi nu får arbeta med ett gäng vänner samt
            ett förälskat par så är det ”match made in heaven”.
          </li>
          <li>
            <strong>Champagne</strong> – eh, vad vore en vinportfölj utan
            riktigt bra bubbel? Champagne känns ju rätt, eller vad tycker ni?
          </li>
          <li>
            <strong>Pfalz</strong> – några av världens bästa viner kommer
            härifrån, tycker vi. Kanske tycker ni det också efter att ha provat
            några?
          </li>
          <li>
            <strong>Monferrato</strong> – jo, det är en del av Piemonte. Men som
            vi säger på WFF: “Why Langhe when you can drink Monferrato?”
          </li>
        </ul>
      </section>

      <hr />

      <footer className="team-signature">
        <p>
          Vill ni skratta mycket, få tillgång till riktigt bra viner och få
          vänner för livet (hoppas vi) – då är vi på Wine for friends redo!!
        </p>
        <p className="signature">/Anders, Tony, Daniel, Max och Tomas</p>
      </footer>
    </div>
  );
};

export default AboutWFF;
