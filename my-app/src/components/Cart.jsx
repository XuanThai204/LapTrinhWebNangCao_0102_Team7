import { Link } from "react-router-dom";
import { useState } from "react";

function Cart({ cart, setCart }) {
  // Hàm cập nhật số lượng sản phẩm
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Tính tổng tiền sản phẩm
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Phí vận chuyển cố định
  const shippingFee = cart.length > 0 ? 40000 : 0;
  const finalTotal = totalPrice + shippingFee;

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5", // Màu nền tổng thể
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff", // Nền trắng cho khung giỏ hàng
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Đổ bóng nhẹ
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Giỏ hàng</h1>
        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>Giỏ hàng trống.</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cart.map((item) => (
                <li
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "80px", borderRadius: "5px" }}
                  />
                  <div style={{ flexGrow: 1 }}>
                    <Link
                      to={`/product/${item.id}`}
                      style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {item.name}
                    </Link>
                    <p
                      style={{
                        color: "red",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.price.toLocaleString()}đ
                    </p>

                    {/* Nút tăng giảm số lượng */}
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      style={{
                        padding: "5px 10px",
                        border: "1px solid #ddd",
                        background: "#f0f0f0",
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                    <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      style={{
                        padding: "5px 10px",
                        border: "1px solid #ddd",
                        background: "#f0f0f0",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <h4>Phí vận chuyển: {shippingFee.toLocaleString()}đ</h4>
            <h3 style={{ color: "red" }}>Tổng tiền: {finalTotal.toLocaleString()}đ</h3>

            <button
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                width: "100%",
                fontSize: "16px",
                fontWeight: "bold",
                marginTop: "10px",
                borderRadius: "5px",
              }}
            >
              ĐẶT HÀNG NGAY
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
