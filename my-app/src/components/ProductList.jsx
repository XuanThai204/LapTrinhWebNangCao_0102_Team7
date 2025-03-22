import { Link } from "react-router-dom";
import products from "./product";
import "./CSS/pd_list.css";

function ProductList() {
  return (
    <div className="product-list-container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p className="price">Giá: ${product.price}</p>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`} className="detail-button">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
