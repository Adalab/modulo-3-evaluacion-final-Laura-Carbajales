import '../styles/components/CharacterDetail.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return props.character === undefined ? (
    'Personaje no encontrado'
  ) : (
    <section>
      <Link to='/'>Volver</Link>
      <p>{props.character.name}</p>
    </section>
  );
};
export default CharacterDetail;
