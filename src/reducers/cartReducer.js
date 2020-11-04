import { ADD_ITEM, REMOVE_ITEM } from '../contants/actions';

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
        optionData
      );
      return {
        cartItems: {
          ...currentItem,
          items: currentItem.items.slice(deleteIndex, 1),
          totalAmount:
            currentItem.totalAmount -
            currentItem.items[deleteIndex].optionType.count * itemData.price,
          totalItems: currentItem.totalItems - 1,
        },
      };
    default:
      return state;
  }
};

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

function findItemIndex(currentData, itemData, optionData) {
  return currentData.findIndex(
    (itemDetails) =>
      itemDetails.id === itemData.id &&
      itemDetails.optionType.id === optionData.id
  );
}

export default cartReducer;
