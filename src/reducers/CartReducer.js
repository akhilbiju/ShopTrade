import { ADD_ITEM, REMOVE_ITEM } from '../constants/Actions';

const cartReducer = (state, action) => {
  const currentItem = state.cartItems;
  const itemData = action.payload.data;
  const optionData = action.payload.optionData;
  switch (action.type) {
    case ADD_ITEM:
      return {
        cartItems: {
          ...currentItem,
          items: addItem(currentItem.items, itemData, optionData),
          totalAmount: currentItem.totalAmount + +itemData.price,
          totalItems: currentItem.totalItems + 1,
        },
      };
    case REMOVE_ITEM:
      const deleteIndex = findItemIndex(
        currentItem.items,
        itemData,
        optionData,
      );
      const selectItem = currentItem.items.splice(deleteIndex, 1)[0].optionType;
      return {
        cartItems: {
          ...currentItem,
          items: [...currentItem.items],
          totalAmount:
            currentItem.totalAmount - selectItem.count * itemData.price,
          totalItems: currentItem.totalItems - selectItem.count,
        },
      };
    default:
      return state;
  }
};

/**
 * Add new item to cart
 * @param {*} currentData - Current cart list
 * @param {*} itemData  - New item data
 * @param {*} optionData  - Variant of the new data
 */
function addItem(currentData, itemData, optionData) {
  const newData = currentData;
  const itemIndex = findItemIndex(currentData, itemData, optionData);
  if (itemIndex !== -1) {
    newData[itemIndex].optionType.count += 1;
  } else {
    newData.push({ ...itemData, optionType: { ...optionData, count: 1 } });
  }
  return [...newData];
}

/**
 * Get the index of the item in cart
 * @param {*} currentData - Current cart list
 * @param {*} itemData  - New item data
 * @param {*} optionData  - Variant of the new data
 */
function findItemIndex(currentData, itemData, optionData) {
  return currentData.findIndex(
    (itemDetails) =>
      itemDetails.id === itemData.id &&
      itemDetails.optionType.id === optionData.id,
  );
}

export default cartReducer;
