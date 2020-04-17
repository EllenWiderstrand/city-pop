import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";

class SearchCity extends React.Component {
    // Sets the initial state
    state = {
        redirect: false
    }
    // Updates the state
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    // Redirects to 'population' to show result
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/population' />
        }
    }
    render(){
        return (
            <div>
                {this.renderRedirect()}
                <h2>
                    SEARCH BY CITY
                </h2>
                <div className="center">
                    <input type="text" id="city" placeholder="Enter a city"/>
                </div>
                <div className="center">
                    <button onClick={this.setRedirect} className="button-search"></button>
                </div>
            </div>
        );
    }
}

export default SearchCity;
