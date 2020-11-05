import { productlist } from '../../../constants/ProductList';
import { SIZES } from '../../../constants/App';
import LazyImage from '../LazyImage/LazyImage';
import './ProductList.scss';

const getDiscount = (item) => {
  const price = item.price;
  const max_price = item.compare_at_price;
  const percent = ((max_price - price) / max_price) * 100;
  return `(${Math.floor(percent)}% OFF)`;
};

const getSize = (variant) => {
  if (variant.value.startsWith('US')) {
    return SIZES['US_' + variant.value.split(' ')[1]];
  }
  return SIZES[variant.value] || variant.value;
};

function ProductList() {
  return (
    <div className="productlist">
      {productlist.map((item) => {
        return (
          <div key={item.id} className="card">
            <LazyImage src={item.image_src[0]} alt="not available" />
            <div className="footer">
              <div className="name">{item.vendor}</div>
              <div className="description">{item.name}</div>
              <div className="price">
                <div className="variant">
                  <span style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                    Slect Size
                  </span>
                  <div className="variant-list">
                    {item.options.map((variant) => {
                      return <span key={variant.id}>{getSize(variant)}</span>;
                    })}
                  </div>
                  <span style={{ marginTop: '10px', fontSize: '13px' }}>
                    Sizes: XS, S, M, L, XL, XXL
                  </span>
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
