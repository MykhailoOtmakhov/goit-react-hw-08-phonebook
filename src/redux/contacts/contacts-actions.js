// import { v4 as uuidv4 } from 'uuid'
import { createAction } from '@reduxjs/toolkit'

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const removeContactRequest = createAction('contacts/removeContactRequest');
export const removeContactSuccess = createAction('contacts/removeContactSuccess');
export const removeContactError = createAction('contacts/removeContactError');


// export const removeContact = createAction('contacts/Remove')

export const changeFilter = createAction('contacts/ChangeFilter');

// export default { addContactRequest, addContactSuccess, addContactError,  removeContact, changeFilter }