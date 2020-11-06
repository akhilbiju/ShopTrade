import React, { useState } from 'react';
import { productlist } from '../../../constants/ProductList';
import { StoreContext } from '../../../contexts/StoreContext';
import LazyImage from '../lazimage/LazyImage';
import './ProductList.scss';
import { getDiscount, getSize } from '../../utils/helper';

function ProductList() {
  const { storeActions } = React.useContext(StoreContext);
  const [selectionState, setSelectionState] = useState({});

  /**
   * Add item to the cart
   * @param {*} item The product item
   */
  const addToCart = (item) => {
    storeActions.itemAdd({
      data: selectionState[item].item,
      optionData: selectionState[item].variant,
    });
  };

  /**
   * Add variant selection to the state
   * @param {*} item - The item to be selected
   * @param {*} variant - Variant of the item
   */
  const addSelection = (item, variant) => {
    const newState = { ...selectionState, [item.id]: { variant, item } };
    setSelectionState(newState);
  };

  /**
   * Remove item selection from state
   * @param {*} item - Item to be removed
   */
  const removeSelection = (item) => {
    if (selectionState[item.id]) {
      const newState = { ...selectionState };
      delete newState[item.id];
      setSelectionState(newState);
    }
  };

  return (
    <div className="productlist">
      {productlist.map((item) => {
        return (
          <div
            onMouseLeave={() => removeSelection(item)}
            key={item.id}
            className="card"
          >
            <LazyImage
              src={item.image_src[0]}
              width="300"
              height="400"
              alt="preview"
            />
            <div className="footer">
              <div className="name">{item.vendor}</div>
              <div className="description">{item.name}</div>
              <div className="price">
                <div className="variant">
                  <div className={!selectionState[item.id] ? '' : 'hidden'}>
                    <span style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                      Select Size
                    </span>
                    <div className="variant-list">
                      {item.options.map((variant) => {
                        return (
                          <span
                            onClick={() => addSelection(item, variant)}
                            key={variant.id}
                          >
                            {getSize(variant)}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(item.id)}
                    className={
                      selectionState[item.id] ? 'addcart' : 'addcart hidden'
                    }
                  >
                    ADD TO CART
                  </button>
                  <span className="sizelist">Sizes: XS, S, M, L, XL, XXL</span>
                </div>
                <span className="listprice">${item.price}</span>
                <span className="maxprice">${item.compare_at_price}</span>
                <span className="discount">{getDiscount(item)}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
