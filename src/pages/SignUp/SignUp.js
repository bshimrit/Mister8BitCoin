import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signupUser } from '../../store/users/usersActions';

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
            this.props.history.push("/");
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <div>Please enter your name:</div>
            <div className="margin-top20">
                <Input id="user" onInput={this.updateInput} type="text"/>
                <input type="submit" />
            </div>
          </form>
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