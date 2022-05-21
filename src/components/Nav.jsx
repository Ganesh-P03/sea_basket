import React from "react";
import Nav_item from "./Nav_item";

function Nav() {
  return (
    <div className="nav">
      <div className="nav_img">
        <img src="https://firebasestorage.googleapis.com/v0/b/sea-basket-9c19f.appspot.com/o/sea_basket.png?alt=media&token=f107684c-2585-4e59-b737-4202977b3cc4" />
      </div>
      <div className="nav_items">
        <Nav_item name="Category" />
        <Nav_item name="FAQ" />
        <Nav_item name="About Us" />
      </div>
    </div>
  );
}

export default Nav;
