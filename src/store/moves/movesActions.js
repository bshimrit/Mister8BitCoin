import * as types from './movesTypes';

import MoveService from '../../services/MoveService.js'

export function loadMoves() {
    return (dispatch) => {
        MoveService.getMoves()
        .then(moves => {
            dispatch( {
                type: types.GET_MOVES,
                payload: moves,
            }
        );
      })
    }
}

export function addMove(move, callback) {
    return (dispatch) => {
        MoveService.addMove(move)
            .then((moves) => {
                dispatch( {
                    type: types.ADD_MOVE,
                    payload: moves,
                }) 
                callback(true)
            })
            .catch(err => {
                console.log(err)
                callback(true)
            })
        }
}