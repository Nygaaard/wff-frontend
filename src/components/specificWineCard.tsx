import { WineI } from "../types/Wines/WineInterface";

const SpecificWineCard: React.FC<WineI> = ({
  title,
  wff_pris,
  wff_producent,
  wff_alkohol,
  wff_artnr_systembolaget,
  wff_beskrivning,
  wff_bestallning,
  wff_distrikt,
  wff_druva,
  wff_jordmon,
  wff_kategori,
  wff_land,
  wff_region,
  wff_servera_till,
  wff_servering,
  wff_storlek,
  wff_vinifikation,
  featured_image_url,
  wff_systembolaget_url,
}) => {
  return (
    <div className="specificWineContainer">
      <section className="leftSection">
        <div className="upper">
          <h2>{title.rendered}</h2>
          <p className="producer">{wff_producent}</p>

          <div className="categorySizeRow">
            {wff_kategori && (
              <p
                className={`category ${
                  wff_kategori === "Privatimport" ? "private" : ""
                }`}
              >
                {wff_kategori}
              </p>
            )}
            {wff_artnr_systembolaget && (
              <p className="artnr grey">Art.nr: {wff_artnr_systembolaget}</p>
            )}
            {wff_storlek && <p className="storlek grey">{wff_storlek}</p>}
          </div>

          <div className="bottomRow">
            {wff_pris && <span className="price">{wff_pris} kr</span>}
            {wff_systembolaget_url && (
              <a
                className="link buy"
                href={wff_systembolaget_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Köp på systembolaget
              </a>
            )}
          </div>
        </div>

        {wff_beskrivning && (
          <div className="descriptionContainer">
            <p>{wff_beskrivning}</p>
          </div>
        )}

        <div className="mid">
          {wff_alkohol && (
            <div className="midObj">
              <p>Alkohol</p>
              <p>{wff_alkohol}</p>
            </div>
          )}
          {wff_land && (
            <div className="midObj">
              <p>Land</p>
              <p>{wff_land}</p>
            </div>
          )}
          {wff_region && (
            <div className="midObj">
              <p>Region</p>
              <p>{wff_region}</p>
            </div>
          )}
          {wff_distrikt && (
            <div className="midObj">
              <p>Distrikt</p>
              <p>{wff_distrikt}</p>
            </div>
          )}
        </div>

        <div className="lower">
          {wff_druva && (
            <div className="lowerObj">
              <p>Druva</p>
              <p>{wff_druva}</p>
            </div>
          )}
          {wff_jordmon && (
            <div className="lowerObj">
              <p>Jordmån</p>
              <p>{wff_jordmon}</p>
            </div>
          )}
          {wff_vinifikation && (
            <div className="lowerObj">
              <p>Vinifikation</p>
              <p>{wff_vinifikation}</p>
            </div>
          )}
          {wff_servering && (
            <div className="lowerObj">
              <p>Servering</p>
              <p>{wff_servering}</p>
            </div>
          )}
          {wff_servera_till && (
            <div className="lowerObj">
              <p>Servera till</p>
              <p>{wff_servera_till}</p>
            </div>
          )}
          {wff_bestallning && (
            <div className="lowerObj">
              <p>Beställning</p>
              <p>{wff_bestallning}</p>
            </div>
          )}
        </div>
      </section>

      {featured_image_url && (
        <section className="rightSection">
          <img src={featured_image_url} alt={title.rendered} />
        </section>
      )}
    </div>
  );
};

export default SpecificWineCard;
