import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

class SearchCountry extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            redirect: false,
            loading: false,
            value: ''
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
    // Redirects to 'cities' to show result of country search 
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/cities' />
        }
    }

    // Checks that the input field is not empty and calls fetchCountyData if it isn't
    handleClick(e){
        if(this.state.value === ""){
            alert("Please enter a country")
        }else{
            this.setLoading()
            this.fetchCountryData()
        }
    }

    // Fetches data from geonames.org based on the country entered by the user
    fetchCountryData(){
        fetch('http://api.geonames.org/searchJSON?name_equals=' + this.state.value + 
            '&featureCode=PCLI&orderby=population&maxRows=1&username=weknowit')
        .then(response => response.json())
        .then(data => 
            // Alerts an error message if that is recieved from the API-call
            {if(data['status']){
                alert("Error: "+ data['status']['message'])
                this.setLoading()
            }
            // Alerts if no country is recieved from the API-call
            else if (data['totalResultsCount']===0){
                alert("That is not an existing country, please enter a country")
                this.setLoading()
                this.resetInput()
            }
            // Calls fetchCountryCities with the name of the city otherwise
            else{
                this.fetchCountryCities(data['geonames'][0]['name'])
            }}
        )
    }

    // Fetches data from geonames.org based on the country and responds with the three biggest cities 
    // countryName is the name of the country entered by the user
    fetchCountryCities(countryName){
        fetch('http://api.geonames.org/searchJSON?q=' + countryName + 
            '&featureCode=PPLA&featureCode=PPLC&orderby=population&maxRows=3&username=weknowit')
        .then(response => response.json())
        .then(data => 
            // Everything is loaded to the state loading is set to false
            {this.setLoading()
            // Alerts with error message if one is recieved from the API-call
            if(data['status']){
                alert("Error: "+ data['status']['message'])
            }
            // Sends the country name as well as the cities with their name and population to parent and calls setRedirect
            else{
                this.props.onSearchCountry(countryName, 
                    [{name: data['geonames'][0]['name'], pop: String(data['geonames'][0]['population'])},
                    {name: data['geonames'][1]['name'], pop: String(data['geonames'][1]['population'])},
                    {name: data['geonames'][2]['name'], pop: String(data['geonames'][2]['population'])}])
                this.setRedirect()
            }}
        )
    }

    // Handles change in text input 
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    // Resets the text input
    resetInput() {
        this.setState({
            value: ''
        });
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                <h2>
                    SEARCH BY COUNTRY
                </h2>
                {/* Input field for a country */}
                <div className="center">
                    <input type="text" placeholder="Enter a country" value={this.state.value} onChange={this.handleChange}/>
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

export default SearchCountry;
