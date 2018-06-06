import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { loadContact } from '../../store/contacts/contactsActions';

import './contactDetails.css'

import ContactService from '../../services/ContactService.js';

import ContactDetail from '../../components/contactDetail/ContactDetail.js';
import Transfer from '../../components/transfer/Transfer.js';


class ContactDetails extends Component {

  componentDidMount() {
    this.props.dispatch(loadContact(this.props.match.params.id));
  }
  
  render() {

    if (!this.props.contact) return <div>Loading...</div>

    var editUrl = '/contact/edit/' + this.props.match.params.id
    return (
      <div className="container contact-details">
        <div className="contact-navbar">
          <Link to={process.env.PUBLIC_URL + "/contacts"}>Back</Link>
          <Link to={process.env.PUBLIC_URL + editUrl}>Edit</Link>
        </div>
        <section>
            <ContactDetail contact={this.props.contact}></ContactDetail>
            <Transfer contact={this.props.contact}></Transfer>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      contact: state.contactsReducers.selectedContact,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      dispatch,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ContactDetails);