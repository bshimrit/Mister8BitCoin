import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadContact, saveContact } from "../../store/contacts/contactsActions";

import "./contactEdit.css";

import Input from "../../components/input/Input.js";
import ContactService from "../../services/ContactService.js";

class ContactEdit extends Component {
  constructor() {
        super();
        this.state = {
            contact: ContactService.getEmptyContact()
        }
    }
    
    handleSubmit = e => {
        e.preventDefault();

        this.props.saveContact(this.state.contact, ()=> {
            this.props.history.push("/contacts");
        })
    }

  

  componentDidMount() {
    if (this.props.match.params.id) this.props.loadContact(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id)  this.setState({contact: nextProps.contact});
  }

  updateInput = data => {
    this.setState({contact: Object.assign(this.state.contact, data)});
  }

  render() {
    return (
      <div className="container contact-edit">
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Name:{" "}
            <Input
              id="name"
              onInput={this.updateInput}
              value={this.state.contact.name}
            />
          </label>
          <label>
            {" "}
            Phone:{" "}
            <Input
              id="phone"
              onInput={this.updateInput}
              value={this.state.contact.phone}
            />
          </label>
          <label>
            {" "}
            Email:{" "}
            <Input
              id="email"
              onInput={this.updateInput}
              value={this.state.contact.email}
            />
          </label>
          <button type="submit">SAVE</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contactsReducers.selectedContact,
  };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({loadContact, saveContact},dispatch) 
};

export default connect(mapStateToProps,mapDispatchToProps)(ContactEdit);