import * as types from './usersTypes';
import StorageService from '../../services/StorageService'

export function signupUser(userName) {
    return (dispatch) => {
        StorageService.setStorage('loggedInUser',{userName: userName, bitCoins: 100})
        dispatch( {
                type: types.SIGNUP_USER,
                payload: user,
        })
    }
}

export function loadLoggedInUser(callback) {
    return (dispatch) => {
        var user = StorageService.getStorage('loggedInUser')
        dispatch( {
                type: types.LOAD_USER,
                payload: user,
        })
        callback();
    }
}

