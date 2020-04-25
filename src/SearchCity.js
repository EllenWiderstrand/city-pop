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
    // Updates the loading state
    setLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }
    // Updates the redirect state
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

    // Checks that text is entered in the input and calls fetchCityData if it is
    //Sends the value of the input "city" to parent and calls setRedirect
    handleClick(e){
        if(document.getElementById("city").value === ""){
            alert("Please enter a city")
        }else{
            this.setLoading()
            this.fetchCityData()
        }
    }

    // Fetches data from geonames.org based on the city entered by the user and sends the value to parent
    fetchCityData(){
        fetch('http://api.geonames.org/searchJSON?name_equals=' + document.getElementById("city").value + 
            '&featureClass=P&maxRows=1&username=weknowit')
        .then(response => response.json())
        .then(data => 
            // All data needed is collected, so the state loading is set to false
            {this.setLoading()
            // Alerts an error message if one is recieved from the API
            if(data['status']){
                alert("Error: "+ data['status']['message'])
            }
            // Alerts if no result was given from the API-call
            else if (data['totalResultsCount']===0){
                alert("That is not an existing city")
            }
            // Sends the name of the city and its population to parent
            else{
                this.props.onSearchCity(data['geonames'][0]['name'], String(data['geonames'][0]['population']))
                this.setRedirect()
            }
            }
        )
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                <h2>
                    SEARCH BY CITY
                </h2>
                {/* Input field for a city */}
                <div className="center">
                    <input type="text" id="city" placeholder="Enter a city"/>
                </div>
                {/* Search button or loading bar if the page is loading */}
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
