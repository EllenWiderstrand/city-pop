import React from 'react';
import './App.css';
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // Called when the header is clicked
  handleClick(){
    this.props.history.push('/')
  }

  render(){
    return (
      <div>
        <div onClick={this.handleClick} className="center">
          <h1 className="header">
            CityPop
          </h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
