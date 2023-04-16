import Tag from "./Tag";

const Card = ({ map, name, description, tag, trajet }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <iframe
        src={map}
        width="300"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p>Temps de trajet: {trajet < 60 ? `${trajet} minutes ` : `1 heure ${trajet - 60} minutes`}</p>
      <p>{description}</p>
      {tag.length > 0 && <Tag tag={tag} />}
    </div>
  );
};

export default Card;
