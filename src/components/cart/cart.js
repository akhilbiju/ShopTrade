import React from 'react';
import { StoreContext } from '../../contexts/todoContext';

function Cart() {
  const { storeState, storeActions } = React.useContext(StoreContext);
  const login = () => {
    storeActions.itemAdded({ name: 'Burhanuddin' });
  };
  return (
    <div>
      <p>{JSON.stringify(storeState)}</p>
      <button onClick={() => login()}>Login</button>
    </div>
  );
}
export default Cart;
