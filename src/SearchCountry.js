import React from 'react';
import './App.css';

class SearchCountry extends React.Component {
    render(){
        return (
            <div>
                <h2>
                    SEARCH BY COUNTRY
                </h2>
                <div className="center">
                    <input type="text" name="name" placeholder="Enter a country"/>
                </div>
                <div className="center">
                    <button className="button-search"></button>
                </div>
            </div>
        );
    }
}

export default SearchCountry;
