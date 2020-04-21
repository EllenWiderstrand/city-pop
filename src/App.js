import React from 'react';
import './App.css';
import Header from './Header'
import StartPage from './StartPage'
import SearchCity from './SearchCity'
import SearchCountry from './SearchCountry'
import PopulationPage from './PopulationPage'
import CitiesPage from './CitiesPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city: "",
      country: "",
      pop: ""
    }
    this.searchCity = this.searchCity.bind(this)
    this.searchCountry = this.searchCountry.bind(this)
  }

  searchCountry(country){
    this.setState({country})
  }

  searchCity(city, pop){
    this.setState({city, pop})
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
              <SearchCity onSearchCity={this.searchCity}/>
            </Route>
            <Route exact path="/search-country">
              <SearchCountry onSearchCountry={this.searchCountry}/>
            </Route>
            <Route exact path="/population">
              <PopulationPage city={this.state.city} pop={this.state.pop}/>
            </Route>
            <Route exact path="/cities">
              <CitiesPage country={this.state.country}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
    }
}

export default App;
