import React from "react";
import IconCheck from "../../../assets/check.png";
import "./product.style.css";

type ProductProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  color: string;
};

const Product = (props: ProductProps) => {
  const { image, name, description, price, color } = props;
  return (
    <>
      <div className="productItem">
        <div
          className="productItem__Image"
          style={{ backgroundColor: `${color}` }}
        >
          <img src={image} alt="shoe-image" />
        </div>
        <div className="productItem__Name">{name}</div>
        <div className="productItem__Description">{description}</div>
        <div className="productItem__Bottom">
          <div className="productItemPrice">${price}</div>
          <div className="productItemButton">
            <p>Add to cart</p>
            {/* <img src={IconCheck} alt="IconCheck" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
