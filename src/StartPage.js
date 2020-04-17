import React from 'react';
import './App.css';

class StartPage extends React.Component {
    render(){
        return (
            <div className="center">
                <button className="button-category">
                    SEARCH BY CITY
                </button>
                <button className="button-category">
                    SEARCH BY COUNTRY
                </button>
            </div>
        );
    }
}

export default StartPage;
