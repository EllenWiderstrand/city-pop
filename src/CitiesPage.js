import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";

class CitiesPage extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            redirect: false,
            loading: false
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
    handleClick(cityNbr){
        this.props.onSearchCity(this.props.threeCities.names[cityNbr], String(this.props.threeCities.pops[cityNbr]))
        this.setRedirect()
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                <h2>
                    {this.props.country}
                </h2>
                <div className="center">
                    <button onClick={() => this.handleClick(0)} className="cityButton">
                        {this.props.threeCities.names[0]}
                    </button>
                </div>
                <div className="center">
                    <button onClick={() => this.handleClick(1)} className="cityButton">
                        {this.props.threeCities.names[1]}
                    </button>
                </div>
                <div className="center">
                    <button onClick={() => this.handleClick(2)} className="cityButton">
                            {this.props.threeCities.names[2]}
                    </button>
                </div>
            </div>
        );
    }
}

export default CitiesPage;
