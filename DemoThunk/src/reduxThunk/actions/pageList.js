import {GET_USERS_SUCCESS, GET_USERS_FAIL} from '../constants';
import axios from 'axios';

export const setPageList = () => async (dispatch) => {
  try {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    dispatch({type: GET_USERS_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
