import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        redirect: false
    }
  }
  // Updates the redirect in the state to the opposite of what it currently is
  setRedirect = () => {
    if(this.state.redirect){
      this.setState({
        redirect: false
    })
    }else{
      this.setState({
        redirect: true
    })}
  }

  // Redirects to 'StartPage' 
  renderRedirect = () => {
    if (this.state.redirect) {
      this.setRedirect()
      return <Redirect to='/' />
    }
  }

  // Called when the header is clicked
  handleClick(){
      this.setRedirect()
  }

  render(){
    return (
      <div>
        {this.renderRedirect()}
        <div onClick={this.handleClick} className="center">
          <h1 className="header">
            CityPop
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
