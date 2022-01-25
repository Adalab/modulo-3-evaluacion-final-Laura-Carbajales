import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import getApiData from '../services/charactersApi';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';

const App = () => {
  const [characters, setcharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('gryffindor');

  useEffect(() => {
    getApiData(filterHouse).then((charactersData) => {
      setcharacters(charactersData);
    });
  }, [filterHouse]);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'house') {
      setFilterHouse(data.value);
    }
  };

  const filteredCharacter = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <div className='page'>
      <Header />
      <main className='page__main'>
        <Filters handleFilter={handleFilter} filterName={filterName} filterHouse={filterHouse} />
        <CharacterList characters={filteredCharacter} />
        <CharacterDetail />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
