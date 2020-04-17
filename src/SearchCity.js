import React from 'react';
import './App.css';

class SearchCity extends React.Component {
    render(){
        return (
            <div>
                <h2>
                    SEARCH BY CITY
                </h2>
                <div className="center">
                    <input type="text" name="name" placeholder="Enter a city"/>
                </div>
                <div className="center">
                    <button className="button-search"></button>
                </div>
            </div>
        );
    }
}

export default SearchCity;
