import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { contactsReducers } from './contacts/contactsReducers';
import { usersReducers } from './users/usersReducers';

const allReducers = combineReducers({
    contactsReducers, usersReducers
});

export default function configStore() {
    return createStore(
        allReducers,
        applyMiddleware(thunk)
    );
}