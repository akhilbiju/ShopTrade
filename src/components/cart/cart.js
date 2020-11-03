import React from 'react';
import { StoreContext } from '../../contexts/todoContext';
import { productlist } from '../../contants/productList';

function Cart() {
  const { storeState, storeActions } = React.useContext(StoreContext);
  const login = () => {
    const randomitem = Math.floor(Math.random() * 28);
    console.log(productlist[randomitem]);
    storeActions.itemAdd(productlist[randomitem]);
  };
  const delet = () => {
    storeActions.itemRemove({ name: 'Burhanuddin' });
  };
  return (
    <div>
      <p>{JSON.stringify(storeState)}</p>
      <button onClick={() => login()}>add</button>
      <button onClick={() => delet()}>delete</button>
    </div>
  );
}
export default Cart;
