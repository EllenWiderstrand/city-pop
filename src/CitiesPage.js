import React from 'react';
import './App.css';

class CitiesPage extends React.Component {
    
    render(){
        return (
            <div>
                <h2>
                    {this.props.country}
                </h2>
                <div className="cityBox">
                    <h3 className="cityName">
                        Paris
                    </h3>
                </div>
                <div className="cityBox">
                    <h3 className="cityName">
                        Göteborg
                    </h3>
                </div>
                <div className="cityBox">
                    <h3 className="cityName">
                        Hamburg
                    </h3>
                </div>
            </div>
        );
    }
}

export default CitiesPage;
