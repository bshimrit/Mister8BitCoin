import React, { Component } from 'react';
import ContactPreview from '../contactPreview/ContactPreview.js'
import './contactList.css'


class ContactList extends Component {

    renderContacts(){
        return this.props.contacts.map(contact => {
            return (<li  key={contact._id} ><ContactPreview contact={contact}></ContactPreview></li>)
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
