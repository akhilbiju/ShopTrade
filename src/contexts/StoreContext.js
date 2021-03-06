import React, { useReducer, createContext, useEffect } from 'react';

import cartReducer from '../reducers/CartReducer';
import { ADD_ITEM, REMOVE_ITEM } from '../constants/Actions';

const StoreContext = createContext();
const localStorageKey = 'storeData';
const initialState = {
  cartItems: { items: [], totalAmount: 0, totalItems: 0 },
};

const StoreProvider = (props) => {
  const [storeState, dispatch] = useReducer(cartReducer, initialState, () => {
    const persistData = localStorage.getItem(localStorageKey);
    return persistData ? JSON.parse(persistData) : initialState;
  });

  /**
   * Store data in localstorage to persist cart data on refresh
   */
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(storeState));
  }, [storeState]);

  const actions = {
    itemAdd: (item) => {
      dispatch({ type: ADD_ITEM, payload: item });
    },
    itemRemove: (item) => {
      dispatch({ type: REMOVE_ITEM, payload: item });
    },
  };

  return (
    <StoreContext.Provider
      value={{
        storeState: storeState,
        storeActions: actions,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
