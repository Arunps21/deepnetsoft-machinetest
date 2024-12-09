import React from "react";
import caroucel from "/caroucel.jpg";
import "../index.css";

function CarouselPage() {
  return (
    <>
      <div className="opacity">
        <img className="carousel" src={caroucel} alt="" />
        <h1>MENU</h1>
        <p>
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu
        </p>
      </div>
    </>
  );
}

export default CarouselPage;
