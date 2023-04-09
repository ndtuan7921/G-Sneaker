import React from "react";
import IconCheck from "../../../assets/check.png";
import "./product.style.css";
import { selectedShoe, shoe } from "../../../App";

interface ProductProps extends shoe {
  handleAddItem: (item: selectedShoe) => void;
}

const Product = (props: ProductProps) => {
  const {
    id,
    image,
    name,
    description,
    price,
    color,
    isInCart,
    handleAddItem,
  } = props;

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
          <div
            className={`productItemButton ${isInCart && "clicked"}`}
            onClick={() =>
              handleAddItem({
                id,
                image,
                name,
                description,
                price,
                color,
                quantity: 1,
              })
            }
          >
            {isInCart ? (
              <img src={IconCheck} alt="IconCheck" />
            ) : (
              <p>Add to cart</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
