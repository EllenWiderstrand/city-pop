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
      pop: "",
      threeCities: [{name: "", pop: ""}]
    }
    this.searchCity = this.searchCity.bind(this)
    this.searchCountry = this.searchCountry.bind(this)
  }

  // Takes in a country name and a list with three city names 
  // and a list with their populations and updates to that
  searchCountry(country, threeCities){
    this.setState({country, threeCities})
  }

  // Takes in a city and a population and updates the state to that
  searchCity(city, pop){
    this.setState({city, pop})
  }

  render(){
    return (
      <div>
        <Router>
          {/* The header CityPop is always portrayed */}
          <Header/>
          {/* Renders the class whose path matches the current URL */}
          <Switch>
            {/* Only '/' renders the start page */}
            <Route exact path="/">
              <StartPage />
            </Route>
            {/* '/search-city' renders searchCity (where the user can search for a city) */}
            <Route exact path="/search-city">
              <SearchCity onSearchCity={this.searchCity}/>
            </Route>
            {/* '/search-country' renders searchCountry (where the user can search for a country) */}
            <Route exact path="/search-country">
              <SearchCountry onSearchCountry={this.searchCountry}/>
            </Route>
            {/* '/population' renders PopulationPage (where a city's population is shown) */}
            <Route exact path="/population">
              <PopulationPage city={this.state.city} pop={this.state.pop}/>
            </Route>
            {/* '/cities' renders CitiesPage (where the three biggest cities are shown) */}
            <Route exact path="/cities">
              <CitiesPage onSearchCity={this.searchCity} country={this.state.country} threeCities={this.state.threeCities}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
    }
}

export default App;
