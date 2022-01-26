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
  const getAliveIcon = () => {
    if (props.character.alive) {
      return <i className='fas fa-heartbeat'></i>;
    }
    return <i class='fas fa-skull-crossbones'></i>;
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
  const getSpeciesIcon = () => {
    if (props.character.species === 'human') {
      return <i className='fas fa-user-alt'></i>;
    } else if (props.character.species === 'half-giant') {
      return <i className='fas fa-user-alt-slash'></i>;
    } else if (props.character.species === 'werewolf') {
      return <i className='fab fa-wolf-pack-battalion'></i>;
    } else if (props.character.species === 'ghost') {
      return <i className='fas fa-ghost'></i>;
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

  const getAltName = () => {
    if (props.character.alternate.length > 0) {
      return (
        <p className='detail__article--text'>Apodos: {props.character.alternate.join(', ')}.</p>
      );
    }
    return null;
  };

  return (
    <section className='detail'>
      <Link to='/' className='detail__link'>
        <i className='icon fas fa-times'></i>
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
          <p className='detail__article--text'>
            Estatus: {getAlive()} {getAliveIcon()}
          </p>
          <p className='detail__article--text'>
            Especie: {getSpecies()} {getSpeciesIcon()}
          </p>
          <p className='detail__article--text'>Género: {getGender()}</p>
          <p className='detail__article--text'>Casa: {props.character.house}</p>
          {getAltName()}
        </div>
      </article>
    </section>
  );
};
export default CharacterDetail;
