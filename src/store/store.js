import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { contactsReducers } from './contacts/contactsReducers';

const allReducers = combineReducers({
    contactsReducers,
});

export default function configStore() {
    return createStore(
        allReducers,
        applyMiddleware(thunk)
    );
}