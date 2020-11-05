import { productlist } from '../../../constants/ProductList';
import LazyImage from '../LazyImage/LazyImage';
import './ProductList.scss';

function ProductList() {
  const getDiscount = (item) => {
    const price = item.price;
    const max_price = item.compare_at_price;
    const percent = ((max_price - price) / max_price) * 100;
    return `(${Math.floor(percent)}% OFF)`;
  };
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
