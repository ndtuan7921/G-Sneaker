import React, { ComponentType, useEffect, useState } from "react";
import "./card.style.css";
import nike_logo from "../../assets/nike.png";
import CartContainer from "../List/Cart";
import ProductContainer from "../List/Product";
import { selectedShoe, shoe } from "../../App";

type CardProps = {
  isCart?: boolean;
  data: Array<shoe | selectedShoe>;
  handleAddItem?: (item: selectedShoe) => void;
  handleRemoveItem?: (item: selectedShoe) => void;
  handleChangeQuantity?: (id: number, count: number) => void;
};

const Card = (props: CardProps) => {
  const { isCart = false, data } = props;

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const sum =
      isCart && data
        ? data.reduce(
            (sum: any, item: any) => sum + item.price * item.quantity,
            0
          )
        : 0;
    setTotal(sum.toFixed(2));
  }, [data]);

  const Component: ComponentType<any> = isCart
    ? CartContainer
    : ProductContainer;
  return (
    <>
      <div className="card">
        <div className="cardHeader">
          <div className="logo">
            <img src={nike_logo} alt="logo" />
          </div>
          {!isCart ? (
            <div className="title">Our Products</div>
          ) : (
            <div className="title">
              Your Cart
              <span className="titleAmount">${total}</span>
            </div>
          )}
        </div>
        <div className="cardBody">
          <Component {...props} />
        </div>
      </div>
    </>
  );
};

export default Card;
