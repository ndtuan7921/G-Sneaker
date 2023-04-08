import React, { useState } from "react";
import IconCheck from "../../../assets/check.png";
import "./product.style.css";

type ProductProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  color: string;
  handleAddItem: (item: any) => void;
};

const Product = (props: ProductProps) => {
  // console.log(props);
  const { image, name, description, price, color, handleAddItem } = props;
  const [added, setIsAdded] = useState(false);

  const handleOnClick = () => {
    const selectedItem = { image, name, description, price, color };
    handleAddItem(selectedItem);
    setIsAdded(!added);
  };
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
            className={`productItemButton ${added && "clicked"}`}
            onClick={handleOnClick}
          >
            {added ? (
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
