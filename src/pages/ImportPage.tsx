import { useEffect } from "react";

const ImportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="private-import"
      style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}
    >
      <section className="intro">
        <h1>Välkommen till privatimport</h1>
        <p>Beställ vin via privatimport på Systembolaget.</p>
        <p>
          Gå in på{" "}
          <a
            href="https://www.systembolaget.se/bestalla-och-handla/privatimport/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Systembolagets sida för privatimport
          </a>
        </p>
      </section>

      <hr className="section-divider" />

      <section className="instructions">
        <h2>Så här gör du</h2>
        <ol>
          <li>Välj butik för leverans.</li>
          <li>
            Fyll i <strong>“WFF wine import AB”</strong> som Säljare och tryck
            därefter på ”Nästa”.
          </li>
          <li>
            Fyll i följande uppgifter:
            <ul>
              <li>
                <strong>Namn på dryck</strong>
              </li>
              <li>
                <strong>Typ av dryck</strong> – vitt vin/rött
                vin/rosé/mousserande
              </li>
              <li>
                <strong>Förpackning</strong> – flaska
              </li>
              <li>
                <strong>Volym</strong> – 750 ml (alt. 1500 ml Magnum)
              </li>
              <li>
                <strong>Antal</strong>
              </li>
            </ul>
          </li>
          <li>
            Klicka på ”Lägg till drycken” och upprepa om ni vill ha flera
            sorter.
          </li>
          <li>Tryck sedan ”Nästa”.</li>
          <li>Godkänn villkoren och klicka på ”Skicka förfrågan”.</li>
        </ol>
      </section>

      <hr className="section-divider" />

      <section className="after-request">
        <h2>Vad händer sen?</h2>
        <p>
          Efter någon dag får du ett mail från Systembolaget efter att din
          förfrågan är kontrollerad och godkänd. I mailet får du också en
          bekräftelse på slutpris.
        </p>
        <p>Ser allt bra ut är det bara att trycka “beställ”.</p>
        <p>
          Några dagar senare kan du hämta ut dina viner i butiken du tidigare
          har valt.
        </p>
      </section>
    </div>
  );
};

export default ImportPage;
