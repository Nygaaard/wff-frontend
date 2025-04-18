import image from "../assets/images/Frontpage.jpg";
import frontpageAboutImage from "../assets/images/Frontpage-about.png";
import WineCard from "../components/WineCard";
import { WineProps } from "../types/Wines/WineProps";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/wine"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setWines(data);
      } catch {
        setError("Något gick fel vid hämtning av viner...");
      } finally {
        setLoading(false);
      }
    };

    fetchWines();
  }, []);

  return (
    <div>
      <section className="frontpage-upper-slice">
        <img src={image} alt="Friends" className="frontpage-image" />
        <div className="frontpage-info">
          <p>
            Ett namn som talar för sig självt och speglar vår filosofi. Vi tror
            att vin är som bäst när det delas – oavsett om det är med gamla
            vänner, nya bekantskaper, kollegor eller familj. Det viktiga är de
            stunder som uppstår, där samtalen flödar och gemenskapen växer
          </p>
        </div>
      </section>

      <section className="upper">
        <h2 className="frontpage-winesList">Våra viner</h2>
      </section>

      {loading && <p>Laddar...</p>}
      {error && <p className="error">{error}</p>}

      <section className="winesList">
        <div className="wineRow">
          {wines.slice(0, 4).map((wine, i) => (
            <div
              key={wine.id}
              className={`wineCardWrapper ${i !== 3 ? "withBorderRight" : ""}`}
            >
              <WineCard
                id={wine.id}
                slug={wine.slug}
                featured_image_url={wine.featured_image_url}
                title={wine.title}
                wff_producent={wine.wff_producent}
                wff_pris={wine.wff_pris}
                wff_kategori={wine.wff_kategori}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="frontpage-about-slice">
        <h3>
          WHY LANGHE WHEN YOU
          <br></br>
          <span className="h3-under">CAN DRINK MONFERRATO</span>
        </h3>
        <div className="frontpage-about">
          <img
            src={frontpageAboutImage}
            alt="Vänner"
            className="frontpage-about-image"
          />
          <div className="frontpage-about-div">
            <p>
              Vår filosofi är att göra vin tillgängligt på ett enkelt och
              förståeligt sätt samt att förmedla dess historia. Även om vi inte
              är fullblodsproffs (även om en del tror det) så älskar vi vin och
              historien de förmedlar. Vi tycker att vin bäst avnjuts i gott
              sällskap, med vänner och familj, och sättet det bidrar till att
              skapa och dela egna minnen och upplevelser.
            </p>
            <Link to="/about">Läs mer om oss</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
