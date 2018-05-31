import * as types from './contactsTypes';
import ContactService from '../../services/ContactService.js'

export function loadContacts(searchValue) {
    return (dispatch) => {
        ContactService.getContacts(searchValue)
        .then(contacts => {
            dispatch( {
                    type: types.LOAD_CONTACTS,
                    payload: contacts,
            }
        );
      })
    }
}

export function loadContact(id) {
    return (dispatch) => {
        ContactService.getContactById(id)
            .then(contact => {
                dispatch( {
                    type: types.GET_CONTACT,
                    payload: contact,
                })
            })
      }
}

export function saveContact(contact, callback) {
    return (dispatch) => {
        ContactService.saveContact(contact)
            .then(() => {
                dispatch( {
                    type: types.SAVE_CONTACT,
                    payload: true,
                }) 
                callback(true)
            })
            .catch(err => {
                console.log(err)
                callback(true)
            })
        }
}