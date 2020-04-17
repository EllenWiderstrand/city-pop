import React from 'react';
import './App.css';
import Header from './Header'
import StartPage from './StartPage'
import Search from './Search'

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Search/>
      </div>
    );
    }
}

export default App;
