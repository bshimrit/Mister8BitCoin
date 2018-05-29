import React, { Component } from 'react';
import ContactService from '../services/ContactService.js';


class ContactDetails extends Component {
  constructor() {
    super();

    this.state = {
      contact: {}
    }
  }

  componentDidMount() {
    ContactService.getContactById("5a56640208fba3e8ecb97305")
      .then(contact => {
          this.setState({contact: contact});
      })
  }
  
  render() {
    return (
      <div className="contact-details">
        <img src={this.state.contact.picture} />
        <section>
            <div>{this.state.contact.name}</div>
            <div>{this.state.contact.phone}</div>
            <div>{this.state.contact.email}</div>
        </section>
      </div>
    );
  }
}

export default ContactDetails;
