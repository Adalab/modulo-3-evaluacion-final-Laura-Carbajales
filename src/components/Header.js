import '../styles/components/Header.scss';
import Logo from '../images/logo.png';
import Filters from './Filters';

const Header = (props) => {
  return (
    <header className='header'>
      <img className='header__img' src={Logo} title='Logo de la web' alt='Logo de la web' />
      <Filters
        handleFilter={props.handleFilter}
        filterName={props.filterName}
        filterHouse={props.filterHouse}
      />
    </header>
  );
};
export default Header;
