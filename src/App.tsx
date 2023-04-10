import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

export interface base {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  color: string;
}

export interface shoe extends base {
  isInCart: boolean;
}

export interface selectedShoe extends base {
  quantity: number;
}

function App() {
  const [data, setData] = useState<shoe[]>([]);
  const [cart, setCart] = useState<selectedShoe[]>([]);
  useEffect(() => {
    fetch("/src/assets/data/shoes.json")
      .then((res) => res.json())
      .then((data) => {
        const result = data.shoes.map((data: shoe) => ({
          ...data,
          isInCart: false,
        }));
        setData(result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  const handleAddItem = (item: selectedShoe) => {
    const index = data.findIndex((shoe) => shoe.id === item.id);
    data[index].isInCart = true;
    setData([...data]);
    setCart([...cart, item]);
  };

  const handleRemoveItem = (item: selectedShoe) => {
    const filteredCart = cart.filter(
      (index: selectedShoe) => index.id !== item.id
    );
    setCart(filteredCart);

    const index = data.findIndex((shoe) => shoe.id === item.id);
    data[index].isInCart = false;
    setData([...data]);
  };

  const handleChangeQuantity = (id: number, count: number) => {
    const index = cart.findIndex((shoe) => shoe.id === id);
    cart[index].quantity = count;
    setCart([...cart]);
  };

  useEffect(() => {
    localStorage.setItem("your cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <Card data={data} handleAddItem={handleAddItem} />
      <Card
        data={cart}
        handleRemoveItem={handleRemoveItem}
        handleChangeQuantity={handleChangeQuantity}
        isCart
      />
    </div>
  );
}

export default App;
