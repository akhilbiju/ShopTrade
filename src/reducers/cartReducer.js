import { ADD_ITEM, REMOVE_ITEM } from '../contants/actions';

const cartReducer = (state, action) => {
  const currentItem = state.cartItems;
  const payload = action.payload;
  switch (action.type) {
    case ADD_ITEM:
      return {
        cartItems: {
          ...currentItem,
          items: [...currentItem.items, payload],
          totalAmount: currentItem.totalAmount + +payload.price,
          savedAmount:
            currentItem.savedAmount +
            (+payload.compare_at_price - +payload.price),
          totalItems: currentItem.totalItems + 1,
        },
      };
    case REMOVE_ITEM:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
