import React, { useRef, useState } from "react";
import "./cart.style.css";
import IconTrash from "../../../assets/trash.png";
import { selectedShoe } from "../../../App";

interface CartProps extends selectedShoe {
  handleRemoveItem: (item: selectedShoe) => void;
  handleChangeQuantity: (id: number, count: number) => void;
}

const Cart = (props: CartProps) => {
  const {
    id,
    description,
    image,
    name,
    price,
    color,
    quantity,
    handleRemoveItem,
    handleChangeQuantity,
  } = props;

  const [totalQuantity, setTotalQuantity] = useState(quantity);

  const handleQuantityUp = () => {
    handleChangeQuantity(id, totalQuantity + 1);
    setTotalQuantity(totalQuantity + 1);
  };

  const handleQuantityDown = () => {
    if (totalQuantity == 1) {
      setTotalQuantity(0);
      handleRemoveItem({
        id,
        description,
        image,
        name,
        price,
        color,
        quantity,
      });
    }
    if (totalQuantity > 1) {
      handleChangeQuantity(id, totalQuantity - 1);
      setTotalQuantity(totalQuantity - 1);
    }
  };
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
              <div className="cartItemCountButton" onClick={handleQuantityDown}>
                -
              </div>
              <div className="cartItemCountNumber">{totalQuantity}</div>
              <div className="cartItemCountButton" onClick={handleQuantityUp}>
                +
              </div>
            </div>
            <div
              className="cartItemRemove"
              onClick={() =>
                handleRemoveItem({
                  id,
                  description,
                  image,
                  name,
                  price,
                  color,
                  quantity,
                })
              }
            >
              <img src={IconTrash} alt="IconTrash" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
