import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signupUser } from '../../store/users/usersActions';

import './signup.css'

import Input from "../../components/input/Input.js";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            user: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.signupUser(this.state.user, ()=> {
            this.props.history.push(process.env.PUBLIC_URL + '/');
        })
    }

    render(){
        return (
        <div className="signup container">
            <form onSubmit={this.handleSubmit}>
            <h1>Please Signup:</h1>
            <div className="margin-top20 flex flex-column align-center">
                <Input id="user" onInput={this.updateInput} type="text" placeHolder="Your name"/>
                <div className="margin-top20">
                    <input disabled={!this.state.user} type="submit" value="SUBMIT"/>
                </div>
            </div>
          </form>
        </div>
        )
    }

    updateInput = data => {
        this.setState({user: data.user});
      }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({signupUser},dispatch) 
};

export default connect(null,mapDispatchToProps)(Signup);