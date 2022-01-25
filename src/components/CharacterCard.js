import '../styles/components/CharacterCard.scss';

const CharacterCard = (props) => {
  const getSpecies = () => {
    if (props.character.species === 'human') {
      return 'Humano';
    } else if (props.character.species === 'half-giant') {
      return 'Medio-gigante';
    } else if (props.character.species === 'werewolf') {
      return 'Hombre-lobo';
    } else if (props.character.species === 'ghost') {
      return 'Fantasma';
    }
  };
  return (
    <article>
      <a className='' href='#'>
        <img
          className=''
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4 className=''>{props.character.name}</h4>
        <p className=''>{getSpecies()}</p>
      </a>
    </article>
  );
};
export default CharacterCard;
