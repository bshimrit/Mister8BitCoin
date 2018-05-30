import React, { Component } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Contacts from './pages/contacts/Contacts.js'
import ContactDetails from './pages/contactDetails/ContactDetails.js'
import Home from './pages/Home/Home.js'
import ContactEdit from './pages/contactEdit/ContactEdit.js'
import Header from './components/header/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
        <BrowserRouter>
          <div>
            <Header></Header>
            <Switch>
              <Route path='/contacts' component={Contacts}/>
              <Route path='/contact/edit/:id?' component={ContactEdit}/>
              <Route path='/contact/:id' component={ContactDetails}/>
              <Route path='/' component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
