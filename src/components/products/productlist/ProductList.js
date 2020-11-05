import { productlist } from '../../../constants/ProductList';
import LazyImage from '../LazyImage/LazyImage';
import './ProductList.scss';

function ProductList() {
  return (
    <div className="productlist">
      {productlist.map((item) => {
        return (
          <div key={item.id} className="card">
            <LazyImage src={item.image_src[0]} alt="not available" />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
