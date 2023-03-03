import { useState, useEffect } from "react";
import "./index.css";
import CardCreator from "../cardCreator";

const Main = ({ setProductGallery }) => {
  const [getProducts, setGetProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((result) => result.json())
      .then((data) => setGetProducts(data.products));
  });

  return (
    <div className="main">
      <h2>Scegli tra i nostri prodotti</h2>
      {getProducts.map((product) => (
        <CardCreator
          productData={product}
          setProductGallery={setProductGallery}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Main;
