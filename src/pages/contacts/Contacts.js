import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { loadContacts } from '../../store/contacts/contactsActions';

import ContactList from '../../components/contactList/ContactList.js'
import ContactFilter from '../../components/contactFilter/ContactFilter.js'
import ContactService from '../../services/ContactService.js';


class Contacts extends Component {
  constructor() {
    super();
    this.searchEvent = this.searchEvent.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(loadContacts({term: ''}));
  }
  
  render() {
    if (!this.props.contacts) {
      return (<div>Loading...</div>)
    }
    return (
      <div className="container contacts">
        <ContactFilter searchEvent={this.searchEvent}></ContactFilter>
        <ContactList contacts={this.props.contacts}></ContactList>
        <Link className="add-btn" to="/contact/edit" ><img src="./img/icons/button.png" /></Link>
      </div>
    );
  }

  searchEvent(searchValue){
    this.props.dispatch(loadContacts(searchValue));
  }
}

const mapStateToProps = (state) => {
  return {
      contacts: state.contactsReducers.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      dispatch,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Contacts);
