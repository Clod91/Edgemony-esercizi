import "./index.css";
import CardCreator from "../cardCreator";

const Main = ({ products, setProductGallery }) => {
  return (
    <div className="main">
      <h2>Scegli tra i nostri prodotti</h2>
      {products.map((product) => (
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
