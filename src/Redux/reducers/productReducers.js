import { ActionTypes } from "../ActionTypes";

let initialState = {
    products : []
}
// reducer is basically a helper function for react redux
export const productReducer = (state = initialState, {type , payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS :
            return {
                ...state, products : payload
            }
        default:
            return initialState
    }
}

export const selectedProductsReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT : 
        return {...state, ...payload}; 
        case ActionTypes.REMOVE_SELECTED_PRODUCT : 
        return {};
        default : 
        return state;
    }
}


