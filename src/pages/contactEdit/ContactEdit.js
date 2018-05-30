import React, { Component } from 'react';

import Input from '../../components/input/Input.js'
import './contactEdit.css'
import ContactService from '../../services/ContactService.js';


class ContactEdit extends Component {

    state = {
       contact: ContactService.getEmptyContact()
    };

    handleSubmit = (e) => {
        e.preventDefault();
        ContactService.saveContact(this.state)
        .then(() => {
            this.props.history.push('/contacts')
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            ContactService.getContactById(this.props.match.params.id)
              .then(contact => {
                  this.setState({contact});
              })
        }
      }

    updateInput = (data) => {
        this.setState(Object.assign(this.state.contact,data))
    }

    render() {
        return (
            <div className="container contact-edit">
                <form onSubmit={this.handleSubmit}>
                    <label> Name: <Input id="name" onInput={this.updateInput} value={this.state.contact.name}/></label>
                    <label> Phone: <Input id="phone" onInput={this.updateInput} value={this.state.contact.phone} /></label>
                    <label> Email: <Input id="email" onInput={this.updateInput} value={this.state.contact.email} /></label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default ContactEdit;
