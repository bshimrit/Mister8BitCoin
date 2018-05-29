import React, { Component } from 'react';
import './contactPreview.css'

class ContactPreview extends Component {

    render() {
        return (
        <div className="contact-preview">
            <img src={this.props.contact.picture} />
            <div className="contact-info">
                <div>{this.props.contact.name}</div>
                <div>{this.props.contact.phone}</div>
            </div>
        </div>
        );
    }
}

export default ContactPreview;
