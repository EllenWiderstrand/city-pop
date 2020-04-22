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
                        {this.props.threeCities[0]}
                    </h3>
                </div>
                <div className="cityBox">
                    <h3 className="cityName">
                        {this.props.threeCities[1]}
                    </h3>
                </div>
                <div className="cityBox">
                    <h3 className="cityName">
                        {this.props.threeCities[2]}
                    </h3>
                </div>
            </div>
        );
    }
}

export default CitiesPage;
