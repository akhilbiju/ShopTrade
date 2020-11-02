import React, { useReducer, createContext, useEffect } from 'react';
import storeReducer from '../reducers/cartReducer';
import { ADD_ITEM } from '../contants/actions';

const StoreContext = createContext();

const initialState = {
  cartItems: [],
};

const StoreProvider = (props) => {
  const [storeState, dispatch] = useReducer(storeReducer, initialState, () => {
    const persistData = localStorage.getItem('cartItems');
    return persistData ? JSON.parse(persistData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(storeState));
  }, [storeState]);

  const actions = {
    itemAdded: (user) => {
      if (user) {
        dispatch({ type: ADD_ITEM, payload: user });
      }
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
