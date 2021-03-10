import React from 'react';
import {Route, Switch } from 'react-router-dom';

import './App.css';
import CountryDetail from './components/CountryDetail';
import CoutriesList from './components/CoutriesList';
import { GlobalProvider } from './components/GlobalState';
import Header from './components/Header';
import InputFields from './components/InputFields';

const App = () => {
  return (
      <GlobalProvider>
        <Header />
        <Switch>
          <Route path="/" exact>
            <InputFields />
            <CoutriesList />
          </Route>
          <Route path="/:name/">
              <CountryDetail />
          </Route>
        </Switch>
      </GlobalProvider>
  );
}

export default App;
