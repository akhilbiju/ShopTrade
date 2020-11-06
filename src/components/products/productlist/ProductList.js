import React, { useState } from 'react';
import { productlist } from '../../../constants/ProductList';
import { PRODUCT_SIZES } from '../../../constants/App';
import { StoreContext } from '../../../contexts/TodoContext';
import LazyImage from '../lazimage/LazyImage';
import './ProductList.scss';

/**
 * Calculate discount applied
 * @param {*} item - The product item object
 */
const getDiscount = (item) => {
  const price = item.price;
  const max_price = item.compare_at_price;
  const percent = ((max_price - price) / max_price) * 100;
  return `(${Math.floor(percent)}% OFF)`;
};

/**
 * Get the size in numbers
 * @param {*} variant - The variant of the selected item
 */
const getSize = (variant) => {
  if (variant.value.startsWith('US')) {
    return PRODUCT_SIZES['US_' + variant.value.split(' ')[1]];
  }
  return PRODUCT_SIZES[variant.value] || variant.value;
};

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
            <LazyImage src={item.image_src[0]} alt="not available" />
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
