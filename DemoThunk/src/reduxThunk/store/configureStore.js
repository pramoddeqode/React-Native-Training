import {createStore, combineReducers, applyMiddleware} from 'redux';
import pageListReducer from '../reducers/pageListReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({userList: pageListReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
