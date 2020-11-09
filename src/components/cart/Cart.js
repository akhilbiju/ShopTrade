import React from 'react';

import './Cart.scss';
import { StoreContext } from '../../contexts/StoreContext';
import cross from '../../images/cross.png';
import LazyImage from '../products/lazimage/LazyImage';
import { getSize } from '../utils/helper';

function Cart() {
  const { storeState, storeActions } = React.useContext(StoreContext);
  const cartItems = storeState.cartItems;
  const deleteItem = (data, option) => {
    storeActions.itemRemove({ data, optionData: option });
  };
  return (
    <div className="cart-container">
      <h2>
        My Cart{cartItems.totalItems > 0 ? ` (${cartItems.totalItems})` : ''}
      </h2>
      <div className="grid-container">
        <div>Product</div>
        <div>Qty</div>
        <div>Remove</div>
        <div>Total</div>
        {cartItems.items.map((item) => {
          return (
            <React.Fragment key={item.id + item.optionType.id}>
              <div className="product">
                <LazyImage
                  src={item.image_src[0]}
                  width="100"
                  height="120"
                  alt="preview"
                />
                <div className="description">
                  <div className="mobile-container_1">
                    <div>
                      {item.vendor}
                      <div>Size: {getSize(item.optionType)}</div>
                    </div>
                    <div className="delete-button_mobile">
                      <img
                        onClick={() => deleteItem(item, item.optionType)}
                        src={cross}
                        alt="delete"
                      ></img>
                    </div>
                  </div>
                  <div className="mobile-container_2">
                    <div>{item.optionType.count}</div>
                    <div className="item-price_mobile">
                      ${item.optionType.count * item.price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemcount">{item.optionType.count}</div>
              <div className="delete-button">
                <img
                  onClick={() => deleteItem(item, item.optionType)}
                  src={cross}
                  alt="delete"
                ></img>
              </div>
              <div className="item-price">
                ${item.optionType.count * item.price}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      {!!cartItems.totalAmount && (
        <div className="total-container">
          <div className="total">
            <span className="label">Total</span>
            <span className="totalamount">${cartItems.totalAmount}</span>
          </div>
          <button>Checkout</button>
        </div>
      )}
      {!cartItems.totalAmount && (
        <div className="empty">Shopping Cart Empty</div>
      )}
    </div>
  );
}
export default Cart;
