import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import getApiData from '../services/charactersApi';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('gryffindor');
  const [filterAncestry, setFilterAncestry] = useState([]);

  useEffect(() => {
    getApiData(filterHouse).then((charactersData) => {
      setCharacters(
        charactersData.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      );
    });
  }, [filterHouse]);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'house') {
      setFilterHouse(data.value);
    } else if (data.key === 'ancestry') {
      if (filterAncestry.includes(data.value)) {
        const newAncestry = filterAncestry.filter((ancestry) => ancestry !== data.value);
        setFilterAncestry(newAncestry);
      } else {
        setFilterAncestry([...filterAncestry, data.value]);
      }
    }
  };

  const filteredCharacter = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterAncestry.length === 0) {
        return true;
      } else {
        return filterAncestry.includes(character.ancestry);
      }
    });

  const getAncestry = () => {
    const ancestry = characters.map((character) => character.ancestry);
    const uniqueAncestry = new Set(ancestry);
    const uniques = [...uniqueAncestry];
    return uniques;
  };

  const renderCharacterDetail = (props) => {
    const routeId = parseInt(props.match.params.id);
    const routerHouseId = props.match.params.houseId;
    setFilterHouse(routerHouseId);
    const foundCharacter = characters.find((character) => character.id === routeId);
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    }

    return <p className='notFoundText'>El personaje que buscas no existe</p>;
  };

  const resetBtn = () => {
    setFilterHouse('gryffindor');
    setFilterName('');
    setFilterAncestry([]);
  };

  return (
    <div className='page'>
      <Header />
      <main className='page__main'>
        <Switch>
          <Route path='/' exact>
            <Filters
              handleFilter={handleFilter}
              filterName={filterName}
              filterHouse={filterHouse}
              ancestry={getAncestry()}
              filterAncestry={filterAncestry}
              resetBtn={resetBtn}
            />
            <CharacterList characters={filteredCharacter} filterName={filterName} />
          </Route>
          <Route path='/house/:houseId/character/:id' render={renderCharacterDetail}></Route>
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
