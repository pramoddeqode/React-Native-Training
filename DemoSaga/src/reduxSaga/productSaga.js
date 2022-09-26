import {put, takeEvery} from 'redux-saga/effects';
import {PRODUCT_LIST, SET_PRODUCT_LIST} from './constants';
import axios from 'axios';

function* getProducts() {
  let data = yield axios.get('https://jsonplaceholder.typicode.com/users');
  const temp = data.data;
  yield put({type: SET_PRODUCT_LIST, temp});
}
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
export default productSaga;
