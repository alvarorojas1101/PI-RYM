import Cards from "../cards/Cards";
export default function Home({ characters, onClose }) {
  return (
    <>
      <div>
        <h1>
          Please enter an ID or receive a random character with the random
          button
        </h1>
      </div>
      <Cards characters={characters} onClose={onClose} />
    </>
  );
}
