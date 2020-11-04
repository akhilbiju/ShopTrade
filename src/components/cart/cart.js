import React from 'react';
import { StoreContext } from '../../contexts/TodoContext';
import { productlist } from '../../constants/ProductList';

function Cart() {
  const { storeState, storeActions } = React.useContext(StoreContext);
  const login = (data, option) => {
    const optionData = data.options.filter((data) => data.id === option)[0];
    storeActions.itemAdd({ data, optionData });
  };
  const delet = (data, option) => {
    const optionData = data.options.filter((data) => data.id === option)[0];
    storeActions.itemRemove({ data, optionData });
  };
  return (
    <div>
      <p>{JSON.stringify(storeState)}</p>
      <button onClick={() => login(productlist[0], '1010')}>1 A</button>
      <button onClick={() => login(productlist[0], '1011')}>1 B</button>
      <button onClick={() => login(productlist[1], '1020')}>2 A</button>
      <button onClick={() => login(productlist[1], '1021')}>2 B</button>

      <button onClick={() => delet(productlist[0], '1010')}>del 1 A</button>
      <button onClick={() => delet(productlist[0], '1011')}>del 1 B</button>
      <button onClick={() => delet(productlist[1], '1020')}>del 2 A</button>
      <button onClick={() => delet(productlist[1], '1021')}>del 2 B</button>
    </div>
  );
}
export default Cart;
