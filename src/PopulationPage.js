import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";

class PopulationPage extends React.Component {

    // Redirects to the start page ifno city is given 
    renderRedirect = () => {
        if (!this.props.city) {
            return <Redirect to='/' />
        }
    }
    
    render(){
        return (
            <div>
                {this.renderRedirect()}
                {/* Name of the city */}
                <h2>
                    {this.props.city}
                </h2>
                {/* Box with the population of the city */}
                <div className="informationBox">
                    <p>
                        POPULATION
                    </p>
                    <h3 className="populationNbr">
                        {this.props.pop}
                    </h3>
                </div>
            </div>
        );
    }
}

export default PopulationPage;
