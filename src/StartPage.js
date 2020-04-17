import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";

class StartPage extends React.Component {
    // Sets the initial state
    state = {
        redirect: false,
        city: false
    }
    // Updated the states when it is going to redirect to 'search-city'
    setCityRedirect = () => {
        this.setState({
            redirect: true,
            city:true
        })
    }
    // Redirects to either 'search-city' or 'search-country'
    renderRedirect = () => {
        if (this.state.redirect) {
            if (this.state.city){
                return <Redirect to='/search-city' />
            }
        }
    }

    render(){
        return (
            <div className="center">
                {this.renderRedirect()}
                <button onClick={this.setCityRedirect} className="button-category">
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
