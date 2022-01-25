import '../styles/components/CharacterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <div>
      <section>
        <ul>{characterElements}</ul>
      </section>
    </div>
  );
};
export default CharacterList;
