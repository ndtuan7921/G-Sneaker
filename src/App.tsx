import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const shoe = {
  //   id: 1,
  image:
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
  name: "Nike Air Zoom Pegasus 36",
  description:
    "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
  price: 108.97,
  color: "#e1e7ed",
};

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState<any>([]);
  useEffect(() => {
    fetch("/src/data/shoes.json")
      .then((res) => res.json())
      .then((data) => setData(data.shoes))
      .catch((err) => {
        throw new Error(err);
      });
  }, []);
  const addItem = (item: any) => {
    setSelectedItem([...selectedItem, item]);
  };
  console.log(selectedItem);
  return (
    <div className="App">
      <Card data={data} handleAddItem={addItem} />
      <Card isCart />
    </div>
  );
}

export default App;
