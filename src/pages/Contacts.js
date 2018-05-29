import React, { Component } from 'react';
import ContactList from '../components/contactList/ContactList.js'
import ContactFilter from '../components/contactFilter/ContactFilter.js'
import ContactService from '../services/ContactService.js';


class Contacts extends Component {
  constructor() {
    super();
    this.searchEvent = this.searchEvent.bind(this);
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    ContactService.getContacts()
      .then(contacts => {
          this.setState({contacts: contacts});
      })
  }
  
  render() {
    return (
      <div className="container Contacts">
        <ContactFilter searchEvent={this.searchEvent}></ContactFilter>
        <ContactList contacts={this.state.contacts}></ContactList>
      </div>
    );
  }

  searchEvent(searchValue){
    ContactService.getContacts(searchValue)
      .then(contacts => {
          this.setState({contacts: contacts});
      })
  }
}

export default Contacts;
