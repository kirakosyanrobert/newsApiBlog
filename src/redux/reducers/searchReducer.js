import {SEARCH_FORM_SUBMIT} from '../actions/actionTypes';

const initalState = {
    value: 'bit'
}

export default (state = initalState, action) => {
    switch(action.type) {
        case SEARCH_FORM_SUBMIT:
            return {
                ...state,
                value: action.payload
            }
        default: 
        return state;
    }
} 

