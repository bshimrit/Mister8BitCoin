import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signupUser } from '../../store/users/usersActions';

import Input from "../../components/input/Input.js";

class Signup extends Component {
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                {" "}
                User:{" "}
                <Input
                    id="user"
                    // onInput={this.updateInput}
                    // value={this.state.contact.name}
                />
            </label>
          </form>
        )
    }
}

export default Signup;