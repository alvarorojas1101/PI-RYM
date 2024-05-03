import Card from "../card/Card";

export default function Cards({ characters, onClose }) {
  return (
    <div className="Cards">
      {characters.map(
        ({ id, name, status, species, gender, origin, image, type }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin?.name}
            image={image}
            type={type}
            onClose={onClose}
          />
        )
      )}
    </div>
  );
}
