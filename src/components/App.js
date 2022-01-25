import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  return (
    <div>
      <Filters />
      <CharacterList />
      <CharacterDetail />
    </div>
  );
};

export default App;
