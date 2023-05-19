import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//  Navbar component
const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);
  console.log(`lengthItems`, lengthItems);
  return (
    <div className="navbar">
      <div className="nav_box">
        <span className="my_shop">
          {/* link is a react router dom  */}
          <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
            {/* project title  */}
            <u>Ninja e-commerce</u>
          </Link>

          {/* Add product field  */}
          <Link to={`/addProduct`} style={{ textDecoration: "none" }}>
            <span className="mx-5 text-white" style={{ fontSize: "15px" }}>
              Add a Product
            </span>
          </Link>
        </span>
        {/* cart field  */}
        <div className="cart">
          <Link to={`/Cart`} style={{ textDecoration: "none" }}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{lengthItems?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
