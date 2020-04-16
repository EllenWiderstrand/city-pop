import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="header">
        CityPop
      </h1>
      <div className="center">
        <button className="button-category">
          SEARCH BY CITY
        </button>
        <button className="button-category">
          SEARCH BY COUNTRY
        </button>
      </div>
    </div>
  );
}

export default App;
