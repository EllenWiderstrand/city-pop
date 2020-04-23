import React from 'react';
import './App.css';

class PopulationPage extends React.Component {
    
    render(){
        return (
            <div>
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
