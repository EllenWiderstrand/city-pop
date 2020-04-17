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
  constructor(props){
    super(props)
    this.state = {
      city: ""
    }
    this.search = this.search.bind(this)
  }

  search(city){
    this.setState({city})
  }

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
              <SearchCity onSearch={this.search}/>
            </Route>
            <Route exact path="/search-country">
              <SearchCountry />
            </Route>
            <Route exact path="/population">
              <PopulationPage city={this.state.city}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
    }
}

export default App;
