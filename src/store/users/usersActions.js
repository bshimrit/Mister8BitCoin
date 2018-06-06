import * as types from './usersTypes';
import StorageService from '../../services/StorageService'

export function signupUser(userName, callback) {
    return (dispatch) => {
        var user = {userName: userName, bitCoins: 100, moves:[]};
        StorageService.setStorage('loggedInUser',JSON.stringify(user))
        dispatch( {
                type: types.SIGNUP_USER,
                payload: user,
        })
        callback();
    }
}

export function loadLoggedInUser(callback) {
    return (dispatch) => {
        var user = JSON.parse(StorageService.getStorage('loggedInUser'));
        dispatch( {
                type: types.LOAD_USER,
                payload: user,
        })
        callback();
    }
}

