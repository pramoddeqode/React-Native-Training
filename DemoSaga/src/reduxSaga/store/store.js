import {combineReducers } from 'redux';
import productData from '../reducers/productReducer';
import productSaga from '../productSaga';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({productData});  
const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
  { 
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
  }
  )
sagaMiddleware.run(productSaga);

export default store;
