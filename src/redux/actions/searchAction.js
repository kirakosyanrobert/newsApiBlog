import {SEARCH_FORM_SUBMIT} from './actionTypes';

export const searchSubmit = (value) => ({
    type: SEARCH_FORM_SUBMIT,
    payload: value
});