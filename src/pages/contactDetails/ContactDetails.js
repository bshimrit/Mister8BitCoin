import React, { Component } from 'react';
import ContactService from '../../services/ContactService.js';
import ContactDetail from '../../components/contactDetail/ContactDetail.js';
import { Link } from 'react-router-dom'
import './contactDetails.css'
class ContactDetails extends Component {
  constructor() {
    super();

    this.state = {
      contact: {}
    }
  }

  componentDidMount() {
    ContactService.getContactById(this.props.match.params.id)
      .then(contact => {
          this.setState({contact: contact});
      })
  }
  
  render() {
    var editUrl = '/contact/edit/' + this.props.match.params.id
    return (
      <div className="container contact-details">
        <div className="contact-navbar">
          <Link to="/contacts">Back</Link>
          <Link to={editUrl}>Edit</Link>
        </div>
        <section>
            <ContactDetail contact={this.state.contact}></ContactDetail>
        </section>
      </div>
    );
  }
}

export default ContactDetails;
