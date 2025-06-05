const AgeController = ({ onConfirm }: { onConfirm: () => void }) => {
  return (
    <div className="ageOverlay">
      <div className="ageContainer">
        <p className="ageText">
          På den här webbplatsen förekommer det information om alkoholhaltiga
          drycker och du måste ha fyllt 20 år för att besöka den.
        </p>
        <button className="ageButton" onClick={onConfirm}>
          Över 20 år
        </button>
      </div>
    </div>
  );
};

export default AgeController;
