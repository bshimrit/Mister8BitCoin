import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { loadMoves } from '../../store/moves/movesActions';

import MovePreview from '../../components/movePreview/MovePreview.js'


class MoveList extends Component {
    componentDidMount() {
        this.props.loadMoves();
    }
    render() {
        if (this.props.moves) {
            return (
            <div className="container">
                <h1>Transfer history</h1>
                <ul className="move-list flex flex-wrap">{this.props.moves.map(move => {
                return (<li  key={move.at} ><MovePreview move={move}></MovePreview></li>)
            })}</ul>
            </div>
            );
        } else {
            return (<div>Loading...</div>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        moves: state.movesReducer.moves,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadMoves},dispatch) 
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(MoveList);
  
