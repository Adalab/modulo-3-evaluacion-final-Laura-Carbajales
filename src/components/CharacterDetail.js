import '../styles/components/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import DefaultImage from '../images/default_img.jpeg';
import Gryffindor from '../images/gryffindor.png';
import Hufflepuff from '../images/hufflepuff.png';
import Ravenclaw from '../images/ravenclaw.png';
import Slytherin from '../images/slytherin.png';

const CharacterDetail = (props) => {
  const image = props.character.image ? props.character.image : DefaultImage;
  const getAlive = () => {
    if (props.character.alive && props.character.gender === 'female') {
      return 'Viva';
    } else if (props.character.alive && props.character.gender === 'male') {
      return 'Vivo';
    } else if (!props.character.alive && props.character.gender === 'female') {
      return 'Muerta';
    } else if (!props.character.alive && props.character.gender === 'male') {
      return 'Muerto';
    }
  };
  const getGender = () => {
    if (props.character.gender === 'female') {
      return 'Mujer';
    } else if (props.character.gender === 'male') {
      return 'Hombre';
    }
  };
  const getSpecies = () => {
    if (props.character.species === 'human' && props.character.gender === 'female') {
      return 'Humana';
    } else if (props.character.species === 'human' && props.character.gender === 'male') {
      return 'Humano';
    } else if (props.character.species === 'half-giant') {
      return 'Medio-gigante';
    } else if (props.character.species === 'werewolf') {
      return 'Hombre-lobo';
    } else if (props.character.species === 'ghost') {
      return 'Fantasma';
    }
  };
  const getShield = () => {
    if (props.character.house === 'Gryffindor') {
      return Gryffindor;
    } else if (props.character.house === 'Hufflepuff') {
      return Hufflepuff;
    } else if (props.character.house === 'Ravenclaw') {
      return Ravenclaw;
    } else if (props.character.house === 'Slytherin') {
      return Slytherin;
    }
  };
  return props.character === undefined ? (
    'Personaje no encontrado'
  ) : (
    <section className='detail'>
      <Link to='/' exact className='detail__link'>
        Volver
      </Link>
      <article className='detail__article'>
        <img
          className='detail__article--shield'
          src={getShield()}
          alt={`Escudo de la casa ${props.character.house}`}
          title={`Escudo de la casa ${props.character.house}`}
        />
        <img
          className='detail__article--img'
          src={image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <div className='detail__article--container'>
          <h4 className='detail__article--title'>{props.character.name}</h4>
          <p className='detail__article--text'>Estatus: {getAlive()}</p>
          <p className='detail__article--text'>Especie: {getSpecies()}</p>
          <p className='detail__article--text'>Género: {getGender()}</p>
          <p className='detail__article--text'>Casa: {props.character.house}</p>
        </div>
      </article>
    </section>
  );
};
export default CharacterDetail;
