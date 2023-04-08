import React, { ComponentType } from "react";
import "./card.style.css";
import nike_logo from "../../assets/nike.png";
import Product from "../Item/Product";
import Cart from "../Item/Cart";
import CartContainer from "../List/Cart";
import ProductContainer from "../List/Product";

type CardProps = {
  isCart?: boolean;
  data?: any;
  handleAddItem?: (item: any) => void;
};

const Card = (props: CardProps) => {
  // console.log(props);
  const { isCart = false, data, handleAddItem } = props;

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
              <span className="titleAmount">$89.97</span>
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
