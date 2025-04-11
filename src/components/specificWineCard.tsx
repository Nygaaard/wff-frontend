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
    <div>
      <section className="leftSection">
        <div className="upper">
          <h2>{title.rendered}</h2>
          <p>{wff_producent}</p>
          <p>{wff_kategori}</p>
          <p>{wff_artnr_systembolaget}</p>
          <p>{wff_storlek}</p>
          <p>{wff_pris}</p>
          <p>{wff_systembolaget_url}</p>
        </div>
        <br />
        <div>
          <p>{wff_beskrivning}</p>
        </div>
        <br />
        <div className="mid">
          <div className="midObj">
            <p>Alkohol</p>
            <p>{wff_alkohol}</p>
          </div>
          <div className="midObj">
            <p>Land</p>
            <p>{wff_land}</p>
          </div>
          <div className="midObj">
            <p>Region</p>
            <p>{wff_region}</p>
          </div>
          <div className="midObj">
            <p>Distrikt</p>
            <p>{wff_distrikt}</p>
          </div>
        </div>
        <div className="lower">
          <div className="lowerObj">
            <p>Druva</p>
            <p>{wff_druva}</p>
          </div>
          <div className="lowerObj">
            <p>Jordmån</p>
            <p>{wff_jordmon}</p>
          </div>
          <div className="lowerObj">
            <p>Vinifikation</p>
            <p>{wff_vinifikation}</p>
          </div>
          <div className="lowerObj">
            <p>Servering</p>
            <p>{wff_servering}</p>
          </div>
          <div className="lowerObj">
            <p>Servera till</p>
            <p>{wff_servera_till}</p>
          </div>
          <div className="lowerObj">
            <p>Beställning</p>
            <p>{wff_bestallning}</p>
          </div>
        </div>
      </section>
      <section className="rightSection">
        <img src={featured_image_url} alt={title.rendered} />
      </section>
    </div>
  );
};

export default SpecificWineCard;
