import { PRODUCT_SIZES } from '../../constants/App';

/**
 * Calculate discount applied
 * @param {*} item - The product item object
 */
export const getDiscount = (item) => {
  const price = item.price;
  const max_price = item.compare_at_price;
  const percent = ((max_price - price) / max_price) * 100;
  return `(${Math.floor(percent)}% OFF)`;
};

/**
 * Get the size in numbers
 * @param {*} variant - The variant of the selected item
 */
export const getSize = (variant) => {
  if (variant.value.startsWith('US')) {
    return PRODUCT_SIZES['US_' + variant.value.split(' ')[1]];
  }
  return PRODUCT_SIZES[variant.value] || variant.value;
};
