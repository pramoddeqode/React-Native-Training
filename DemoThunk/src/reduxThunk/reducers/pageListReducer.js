import {GET_USERS_SUCCESS,GET_USERS_FAIL } from '../constants';
const initialState = {
  pageList: [],
};
const pageListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS :
      return {
        ...state,
        pageList:action.payload
      };
      case GET_USERS_FAIL:
        return{
          error:action.payload
        };
    default:
      return state;
  }
};
export default pageListReducer;
