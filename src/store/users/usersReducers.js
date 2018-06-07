import * as types from './usersTypes';
import _ from 'lodash';

const initState = {
    loggedInUser: null,
}

export function usersReducers(state = initState, action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case types.SIGNUP_USER: 
        case types.LOAD_USER:
            newState.loggedInUser = action.payload;
            console.log(newState)
            return newState;
            break;  
        case types.ADD_MOVE:
            newState.loggedInUser.bitCoins -= action.payload[0].amount;
            return newState;
            break;
        default:
            return newState;
    }
}