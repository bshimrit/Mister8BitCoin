import * as types from './movesTypes';
import _ from 'lodash';

const initState = {
    moves: [],
}

export function movesReducer(state = initState, action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case types.GET_MOVES:
            newState.moves = action.payload;
            return newState;
            break;
        case types.ADD_MOVE:
            return newState = action.payload;
            break;
        case types.LOAD_USER:
            if (action.payload) newState.moves = action.payload.moves;
            return newState;
            break;
        default:
            return state;
    }
}