import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addMove } from "../../store/moves/movesActions";

import "./transfer.css";

import Input from "../input/Input.js";
import MoveService from "../../services/MoveService.js";

class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move: MoveService.initMove(this.props.contact.name),
            onTransfer: false
        }
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.setState({onTransfer: true})
        this.props.addMove(this.state.move,() => {
            setTimeout(() => {
                this.setState({move: MoveService.initMove(this.props.contact.name),onTransfer:false})
            }
            ,2000)
        })
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({move: MoveService.initMove(nextProps.contact.name)});
    }

    updateInput = data => {
        this.setState({move: Object.assign(this.state.move, data)});
    }

  render() {
    if (this.state.onTransfer) {
        return (
            <div className="container transfer">
                <img className="margin-top20" src="img/icons/transfer.gif" />
            </div>)
    } else {
        return (
          <div className="container transfer">
            <form className="flex flex-column align-start margin-top20" onSubmit={this.handleSubmit}>
                <h1 className="margin-top20">Transfer bitcoins?</h1>
                <div className="flex flex-column align-end">
                    <div> Amount: 
                        <Input id="amount" onInput={this.updateInput} type="number" />
                    </div>
                    <button  type="submit">TRANSFER</button>
                </div>
            </form>
          </div>
        );
    }

  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({addMove},dispatch) 
};

export default connect(null,mapDispatchToProps)(Transfer);