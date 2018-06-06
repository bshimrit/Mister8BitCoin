import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
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
import MoveList from './pages/moveList/MoveList'

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
                <Route path={process.env.PUBLIC_URL + '/moves'} render={() => (
                      !this.props.loggedInUser ? ( <Redirect to={process.env.PUBLIC_URL + "/signup"} />) : (<MoveList/>))}/>
                  <Route path={process.env.PUBLIC_URL + '/contacts'} render={() => (
                      !this.props.loggedInUser ? ( <Redirect to={process.env.PUBLIC_URL + "/signup"} />) : (<Contacts/>))}/>/>
                  <Route path={process.env.PUBLIC_URL + '/contact/edit/:id?'} render={(props) => (
                      !this.props.loggedInUser ? ( <Redirect to={process.env.PUBLIC_URL + "/signup"} />) : (<ContactEdit{...props}/>))}/>/>
                  <Route path={process.env.PUBLIC_URL + '/contact/:id'} render={(props) => (
                      !this.props.loggedInUser ? ( <Redirect to={process.env.PUBLIC_URL + "/signup"} />) : (<ContactDetails{...props}/>))}/>/>
                  <Route path={process.env.PUBLIC_URL + '/signup'} component={Signup} />
                  <Route path={process.env.PUBLIC_URL + '/'} render={() => (
                      !this.props.loggedInUser ? ( <Redirect to={process.env.PUBLIC_URL + "/signup"} />) : (<Home loggedInUser={this.props.loggedInUser}/>))}/>
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
