import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

class SearchCity extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            redirect: false,
            loading: false
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
            return <Redirect to='/population' />
        }
    }

    // Sends the value of the input "city" to parent and calls setRedirect
    handleClick(e){
        if(document.getElementById("city").value === ""){
            alert("Please enter a city")
        }else{
            this.setState({
                loading: true
            })
            this.fetchCityData()
        }
    }

    // Fetches data from geonames.org based on the city entered by the user
    fetchCityData(){
        fetch('http://api.geonames.org/searchJSON?name_equals=' + document.getElementById("city").value + 
            '&featureClass=P&maxRows=1&username=weknowit')
        .then(response => response.json())
        .then(data => 
            {if(data['status']){
                alert("Error: "+ data['status']['message'])
            }else if (data['totalResultsCount']===0){
                alert("That is not an existing city")
            }else{
                this.props.onSearchCity(data['geonames'][0]['name'], String(data['geonames'][0]['population']))
                this.setRedirect()
            }
            this.setState({
                loading: false
            })}
        )
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                <h2>
                    SEARCH BY CITY
                </h2>
                <div className="center">
                    <input type="text" id="city" placeholder="Enter a city"/>
                </div>
                <div className="center">
                    {!this.state.loading && <button onClick={this.handleClick} className="button-search"></button>}
                    <div className="loader">
                        {this.state.loading && <SyncLoader />}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchCity;
