import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaList } from "react-icons/fa";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      backgroundColor: "#fff"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src="src/logo_image.png" alt="Logo" style={{ width: "50px" }} />
        <input type="text" placeholder="Bạn cần tìm gì?" />
        <FaSearch />
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>

        
        <Link to="/products" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
          <Link to="/">
          <FaList/> Danh sách sản phẩm</Link>
        </Link>

        <Link to="/cart">
          <FaShoppingCart /> Giỏ hàng 
        </Link>



        <Link to="/login">
          <FaUser /> Đăng nhập
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
