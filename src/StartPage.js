import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";

class StartPage extends React.Component {
    state = {
        redirect: false,
        city: false
    }
    // Updates the state when it is going to redirect to 'search-city'
    setCityRedirect = () => {
        this.setState({
            redirect: true,
            city:true
        })
    }
    // Updated the states when it is going to redirect to 'search-city'
    setCountryRedirect = () => {
        this.setState({
            redirect: true,
            city:false
        })
    }
    // Redirects to either 'search-city' or 'search-country' based on the city state
    renderRedirect = () => {
        if (this.state.redirect) {
            if (this.state.city){
                return <Redirect to='/search-city' />
            }else{
                return <Redirect to='/search-country' />
            }
        }
    }

    render(){
        return (
            <div className="center">
                {this.renderRedirect()}
                {/* Button for search by city */}
                <button onClick={this.setCityRedirect} className="button-category">
                    SEARCH BY CITY
                </button>
                {/* Button for search by country */}
                <button onClick={this.setCountryRedirect} className="button-category">
                    SEARCH BY COUNTRY
                </button>
            </div>
        );
    }
}

export default StartPage;
