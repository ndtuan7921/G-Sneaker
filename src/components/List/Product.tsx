import React from "react";
import Product from "../Item/Product";
import { selectedShoe, shoe } from "../../App";

interface ProductContainerProps {
  data: shoe[];
  handleAddItem: (item: selectedShoe) => void;
}

const ProductContainer = (props: ProductContainerProps) => {
  const { data, handleAddItem } = props;
  return (
    <>
      {data.map((shoe: shoe) => {
        return (
          <Product {...shoe} key={shoe.id} handleAddItem={handleAddItem} />
        );
      })}
    </>
  );
};

export default ProductContainer;
