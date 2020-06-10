import React, { Component } from 'react';
import Header from './header/Header'
import Login from './components/Login'
class App extends Component {
  render() {
    return (
      <div >
        <div className='Header'>
        <Header/>
        <hr/>
        <Login/>
        </div> 
      </div>
    );
  }
}

export default App;
