import Cards from "../cards/Cards";
import PropTypes from 'prop-types';

export default function Home({ characters, onClose }) {
  return (
    <>
      {!characters.length && (
        <div>
          <h1>
            Please enter an ID or receive a random character with the random
            button
          </h1>
        </div>
      )}
      <Cards characters={characters} onClose={onClose} />
    </>
  );
}

Home.propTypes = {
  characters: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired
};
