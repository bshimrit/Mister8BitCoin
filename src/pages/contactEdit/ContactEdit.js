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
    }

    saveSubmit = e => {
      this.props.saveContact(this.state.contact, ()=> {
        this.props.history.push("/contacts");
      })
    }

    cancelSubmit = e => {
      this.props.history.push("/contacts");
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
        <form className="flex flex-column align-start" onSubmit={this.handleSubmit}>
          <div>
            <div className="flex align-center margin-top20">
              <div className="title" > Name: </div> 
              <Input id="name" onInput={this.updateInput} value={this.state.contact.name} />
            </div>
            <div className="flex align-center margin-top20">
              <div className="title"> Phone: </div> 
              <Input id="phone" onInput={this.updateInput} value={this.state.contact.phone} />
            </div>
            <div className="flex align-center margin-top20">
              <div className="title"> Email: </div> 
              <Input id="email" onInput={this.updateInput} value={this.state.contact.email} />
            </div>
            <div className="flex justify-end btn-panel flex">
              <button className="pointer" onClick={this.cancelSubmit}>CANCEL</button>
              <button className="pointer" onClick={this.saveSubmit}>SAVE</button>
            </div>
          </div>
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