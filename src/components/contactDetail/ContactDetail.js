import React, { Component } from 'react';
import './contactDetail.css'


const ContactDetail = ({contact}) => {
      return (
        <div className="contact-detail">
          <img src={process.env.PUBLIC_URL + "//" + contact.picture} />
          <section>
              <div>{contact.name}</div>
              <div>Phone: {contact.phone}</div>
              <div>Email: {contact.email}</div>
          </section>
        </div>
      );
}


export default ContactDetail;
