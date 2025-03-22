import { useParams } from "react-router-dom";
import products from "./product";
import "./CSS/pd_detail.css"


function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Không tìm thấy sản phẩm</p>;
  }
  return (
    <div className="product-container">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h1>{product.name}</h1>
        <p className="price">Giá: ${product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
}

export default ProductDetail;
