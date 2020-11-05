import { productlist } from '../../../constants/ProductList';
import './ProductList.scss';

function ProductList() {
  return (
    <div className="productlist">
      {productlist.map((item) => {
        return (
          <div key={item.id} className="card">
            <img src={item.image_src[0]} alt="not available"></img>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
