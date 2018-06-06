import React, { Component } from 'react';
import './contactPreview.css'

const ContactPreview = ({contact}) => {
        return (
        <div className="contact-preview">
            <img src={process.env.PUBLIC_URL + contact.picture} />
            <div className="contact-info">
                <div>{contact.name}</div>
                <div>{contact.phone}</div>
            </div>
        </div>
        );
    }

export default ContactPreview;
