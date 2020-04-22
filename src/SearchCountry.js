import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

class SearchCountry extends React.Component {
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
            return <Redirect to='/cities' />
        }
    }

    // Sends the value of the input "city" to parent and calls setRedirect
    handleClick(e){
        if(document.getElementById("country").value === ""){
            alert("Please enter a country")
        }else{
            this.setState({
                loading: true
            })
            this.fetchCountryData()
        }
        //this.props.onSearchCountry(document.getElementById("country").value)
    }

    // Fetches data from geonames.org based on the country entered by the user
    fetchCountryData(){
        fetch('http://api.geonames.org/searchJSON?name_equals=' + document.getElementById("country").value + 
            '&fcode=PCLI&orderby=population&maxRows=1&username=weknowit')
        .then(response => response.json())
        .then(data => 
            {if(data['status']){
                alert("Error: "+ data['status']['message'])
            }else if (data['totalResultsCount']===0){
                alert("That is not an existing country")
            }else{
                this.props.onSearchCountry(data['geonames'][0]['name'])
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
                    SEARCH BY COUNTRY
                </h2>
                <div className="center">
                    <input type="text" id="country" placeholder="Enter a country"/>
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

export default SearchCountry;
