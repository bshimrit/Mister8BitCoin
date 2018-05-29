import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './pages/Contacts'
import ContactDetails from './pages/ContactDetails'
import Home from './pages/Home'
import { BrowserRouter,Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="container App-header">
          <img src="/img/logo.png" />
          <h1>Mister 8BitCoin</h1>
        </header>
        <div className="App-intro">
        <BrowserRouter>
          <Switch>
            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/Contact/Edit/:id' component={ContactDetails}/>
            <Route exact path='/Contact/:id' component={ContactDetails}/>
            <Route exact path='/' component={Home}/>
          </Switch>
        </BrowserRouter>
         {/* <Contacts></Contacts>
         <ContactDetails></ContactDetails> */}
        </div>
      </div>
    );
  }
}

export default App;
