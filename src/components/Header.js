import '../styles/components/Header.scss';
import Logo from '../images/logo.png';

const Header = (props) => {
  return (
    <header className='header'>
      <img className='header__img' src={Logo} title='Logo de la web' alt='Logo de la web' />
    </header>
  );
};
export default Header;
