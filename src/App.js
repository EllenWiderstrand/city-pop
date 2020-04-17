import React from 'react';
import './App.css';
import Header from './Header'
import StartPage from './StartPage'
import SearchCity from './SearchCity'
import SearchCountry from './SearchCountry'
import PopulationPage from './PopulationPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  
  render(){
    return (
      <div>
        {/* The header CityPop is always portrayed */}
        <Header/>
        <Router>
          {/* Renders the class whose path matches the current URL */}
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route exact path="/search-city">
              <SearchCity />
            </Route>
            <Route exact path="/search-country">
              <SearchCountry />
            </Route>
            <Route exact path="/population">
              <PopulationPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
    }
}

export default App;
