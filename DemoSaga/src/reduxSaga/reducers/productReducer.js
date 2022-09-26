import { SET_PRODUCT_LIST } from '../constants';

const productData = (data=[],action) => {
  switch (action.type) {
        case SET_PRODUCT_LIST :
          return [...action.temp];
    default:
      return data;
  }
};
export default productData;
