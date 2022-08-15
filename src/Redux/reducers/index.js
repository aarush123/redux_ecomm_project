import {combineReducers } from 'redux';
import { productReducer, selectedProductsReducer } from './productReducers';

const reducers = combineReducers ({
    allProducts : productReducer, 
    selectedProduct : selectedProductsReducer
})

export default reducers;