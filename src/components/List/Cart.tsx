import React from "react";
import Cart from "../Item/Cart";
import { selectedShoe } from "../../App";

interface CartContainerProps {
  data: selectedShoe[];
  handleRemoveItem: (item: selectedShoe) => void;
  handleChangeQuantity: (id: number, count: number) => void;
}

const CartContainer = (props: CartContainerProps) => {
  const { data, handleRemoveItem, handleChangeQuantity } = props;
  return (
    <>
      {data.length == 0 && <p>Your cart is empty</p>}
      {data.map((shoe: selectedShoe) => {
        return (
          <Cart
            {...shoe}
            key={shoe.id}
            handleRemoveItem={handleRemoveItem}
            handleChangeQuantity={handleChangeQuantity}
          />
        );
      })}
    </>
  );
};

export default CartContainer;
