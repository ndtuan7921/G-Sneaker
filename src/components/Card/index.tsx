import React from "react";
import "./card.style.css";
import nike_logo from "../../assets/nike.png";
import Product from "../Item/Product";

type CardProps = {};

const shoe = {
  //   id: 1,
  image:
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
  name: "Nike Air Zoom Pegasus 36",
  description:
    "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
  price: 108.97,
  color: "#e1e7ed",
};

const Card = (props: CardProps) => {
  return (
    <>
      <div className="card">
        <div className="cardHeader">
          <div className="logo">
            <img src={nike_logo} alt="logo" />
          </div>
          <div className="title">Our Products</div>
        </div>
        <div className="cardBody">
          <Product {...shoe} />
        </div>
      </div>
    </>
  );
};

export default Card;
