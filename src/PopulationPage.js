import React from 'react';
import './App.css';

class PopulationPage extends React.Component {
    
    render(){
        return (
            <div>
                <h2>
                    {this.props.city}
                </h2>
                <div className="informationBox">
                    <p>
                        POPULATION
                    </p>
                    <h3 className="populationNbr">
                        1 234 567
                    </h3>
                </div>
            </div>
        );
    }
}

export default PopulationPage;
