import React from "react";
import "./cart.style.css";
import IconTrash from "../../../assets/trash.png";

type CartProps = {
  image: string;
  name: string;
  description?: string;
  price: number;
  color: string;
};

const Cart = (props: CartProps) => {
  const { image, name, price, color } = props;
  return (
    <>
      <div className="cartItem">
        <div className="cartItemLeft">
          <div
            className="cartItemLeft__Image"
            style={{ backgroundColor: `${color}` }}
          >
            <img src={image} alt="shoe-image" />
          </div>
        </div>
        <div className="cartItemRight">
          <div className="cartItemRight__Name">{name}</div>
          <div className="cartItemRight__Price">${price}</div>
          <div className="cartItemRight__Action">
            <div className="cartItemCount">
              <div className="cartItemCountButton">-</div>
              <div className="cartItemCountNumber">1</div>
              <div className="cartItemCountButton">+</div>
            </div>
            <div className="cartItemRemove">
              <img src={IconTrash} alt="IconTrash" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
