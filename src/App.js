import React from 'react';
import './App.css';
import Header from './Header'
import StartPage from './StartPage'
import Search from './SearchCity'
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
              <Search />
            </Route>
          </Switch>
        </Router>
      </div>
    );
    }
}

export default App;
