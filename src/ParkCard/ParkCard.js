import "./ParkCard.css";

const ParkCard = ({ park }) => {
  return (
    <div>
      <h3 className="margin">
        Park Name:{" "}
        <button className="park-link" onClick={() => window.open(park?.url)}>
          {park?.fullName}
        </button>
      </h3>
      {park?.designation && (
        <p className="park-type margin">{park.designation}</p>
      )}
      <section id="section">Description: {park?.description}</section>
    </div>
  );
};

export default ParkCard;
