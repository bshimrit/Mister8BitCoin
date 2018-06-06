import React, { Component } from 'react';
import ContactPreview from '../contactPreview/ContactPreview.js'
import './contactList.css'
import { Link } from 'react-router-dom'


class ContactList extends Component {

    renderContacts(){
        return this.props.contacts.map(contact => {
            let curUrl = '%PUBLIC_URL%/contact/' + contact._id;
            return (<li  key={contact._id} ><Link to={curUrl}><ContactPreview contact={contact}></ContactPreview></Link></li>)
        })
    }

    render() {
        return (
        <div className="contact-list">
            <ul>{this.renderContacts()}</ul>
        </div>
        );
    }
}

export default ContactList;
