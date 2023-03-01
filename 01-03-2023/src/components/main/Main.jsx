import "./index.css";
import CardCreator from "../cardCreator";

const Main = ({ products }) => {
  return (
    <div className="main">
      <h2>Scegli tra i nostri prodotti</h2>
      {products.map((product) => (
        <CardCreator productData={product} key={product.id} />
      ))}
    </div>
  );
};

export default Main;
