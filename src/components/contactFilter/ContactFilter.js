import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './contactFilter.css'


class ContactFilter extends Component {
    constructor(props){
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
      }

    render(){
        return (
          <input className="contact-filter" onKeyUp={this.onKeyUp} ref="itemName" type="text" placeholder="Search..." />
        );
      }
      onKeyUp(event) {
        var input = ReactDOM.findDOMNode(this.refs.itemName)
        var searchValue = input.value;
        this.props.searchEvent({term: searchValue });
      }
}

export default ContactFilter;
