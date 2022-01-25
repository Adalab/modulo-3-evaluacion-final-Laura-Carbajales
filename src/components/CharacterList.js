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
    <section className='container'>
      <ul className='container__list'>{characterElements}</ul>
    </section>
  );
};
export default CharacterList;
