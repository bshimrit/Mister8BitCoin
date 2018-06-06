import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { contactsReducers } from './contacts/contactsReducers';
import { usersReducers } from './users/usersReducers';
import { movesReducer } from './moves/movesReducer';

const allReducers = combineReducers({
    contactsReducers, usersReducers, movesReducer
});

export default function configStore() {
    return createStore(
        allReducers,
        applyMiddleware(thunk)
    );
}