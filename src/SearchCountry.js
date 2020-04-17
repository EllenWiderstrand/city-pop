import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";

class SearchCountry extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            redirect: false
        }
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
            return <Redirect to='/cities' />
        }
    }

    // Sends the value of the input "city" to parent and calls setRedirect
    handleClick(e){
        this.props.onSearchCountry(document.getElementById("country").value)
        this.setRedirect()
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                <h2>
                    SEARCH BY COUNTRY
                </h2>
                <div className="center">
                    <input type="text" id="country" placeholder="Enter a country"/>
                </div>
                <div className="center">
                    <button onClick={this.handleClick} className="button-search"></button>
                </div>
            </div>
        );
    }
}

export default SearchCountry;
