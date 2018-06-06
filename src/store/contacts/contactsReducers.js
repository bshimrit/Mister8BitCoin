import * as types from './contactsTypes';
import _ from 'lodash';

const initState = {
    contacts: [],
    selectedContact: null
}

export function contactsReducers(state = initState, action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case types.LOAD_CONTACTS:
            newState.contacts = action.payload;
            return newState;
            break;
        case types.GET_CONTACT:
            newState.selectedContact = action.payload;
            return newState;
            break;
        case types.SAVE_CONTACT:
            return newState;
            break;
        default:
            return state;
    }
}
