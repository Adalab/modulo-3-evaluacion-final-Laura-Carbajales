import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import getApiData from '../services/charactersApi';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setcharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('');

  useEffect(() => {
    getApiData().then((charactersData) => {
      setcharacters(charactersData);
    });
  }, []);

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
    <div>
      <Filters handleFilter={handleFilter} filterName={filterName} />
      <CharacterList characters={filteredCharacter} />
      <CharacterDetail />
    </div>
  );
};

export default App;
