import React, { Component } from 'react';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {loadLoggedInUser} from './store/users/usersActions'

import logo from './logo.svg';
import './App.css';


import Contacts from './pages/contacts/Contacts.js'
import ContactDetails from './pages/contactDetails/ContactDetails.js'
import Home from './pages/home/Home.js'
import ContactEdit from './pages/contactEdit/ContactEdit.js'
import Header from './components/header/Header.js'
import Signup from './pages/signup/Signup.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    }
  }
  componentDidMount() {
    this.props.loadLoggedInUser(() => { this.setState({loading: false})});
  }
  
  render() {
    // console.log(this.props.loggedInUser)
      if (!this.props.loggedInUser && this.state.loading) {
        return (
          <div className="App">
            <div className="App-intro">
              <div>Loading...</div>
            </div>
          </div>)
      } else {
        return (
          <div className="App">
            <div className="App-intro">
            <BrowserRouter>
              <div>
                <Header></Header>
                <Switch>
                  <Route path='/contacts' render={() => (
                      !this.props.loggedInUser ? ( <Redirect to="/signup"/>) : (<Contacts/>))}/>/>
                  <Route path='/contact/edit/:id?' render={() => (
                      !this.props.loggedInUser ? ( <Redirect to="/signup"/>) : (<ContactEdit/>))}/>/>
                  <Route path='/contact/:id' render={() => (
                      !this.props.loggedInUser ? ( <Redirect to="/signup"/>) : (<ContactDetails/>))}/>/>
                  <Route path='/signup' component={Signup} />
                  <Route path='/' render={() => (
                      !this.props.loggedInUser ? ( <Redirect to="/signup"/>) : (<Home/>))}/>
                </Switch>
              </div>
            </BrowserRouter>
            </div>
          </div>
        );
      }
    }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.usersReducers.loggedInUser,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({loadLoggedInUser},dispatch) 
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
