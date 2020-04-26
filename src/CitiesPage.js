import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";

class CitiesPage extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            redirect: false
        }
    }
    // Updates the redirect in the state
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

    // Called when a city-button is clicked
    // Calls onSearchCity with the name and population of the chosen city
    handleClick(city){
        this.props.onSearchCity(city.name, city.pop)
        this.setRedirect()
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                {/* Header with the name of the country */}
                <h2>
                    {this.props.country}
                </h2>
                {/* Maps three buttons for the cities */}
                {this.props.threeCities.map((city, i) => (
                    <div key={i} className="center">
                        <button onClick={() => this.handleClick(city)} className="cityButton">
                            {city.name}
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default CitiesPage;
