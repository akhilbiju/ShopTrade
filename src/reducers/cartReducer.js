import { ADD_ITEM } from '../contants/actions';

const storeReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};
export default storeReducer;
