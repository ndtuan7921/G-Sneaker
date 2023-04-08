import React from "react";
import Product from "../Item/Product";

type ProductContainerProps = {
  data: [];
  handleAddItem?: (item: any) => void;
};

const ProductContainer = (props: ProductContainerProps) => {
  // console.log(props);
  const { data, handleAddItem } = props;
  return (
    <>
      {data.map((shoe: any) => {
        return (
          <Product {...shoe} key={shoe.id} handleAddItem={handleAddItem} />
        );
      })}
    </>
  );
};

export default ProductContainer;
