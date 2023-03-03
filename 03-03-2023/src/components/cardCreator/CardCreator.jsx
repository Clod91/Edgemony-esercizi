import "./index.css";
import Button from "../Button";

const CardCreator = ({ productData, setProductGallery }) => {
  const onBtnClick = () => setProductGallery(() => productData);

  return (
    <div className="card">
      <img src={productData.thumbnail} alt="product" />
      <h5>{productData.title}</h5>
      <p>{productData.description}</p>
      <p>{productData.price}</p>
      <hr />
      <p>{productData.category}</p>
      <p>sconto del {productData.discountPercentage}%</p>
      <p>disponibilità {productData.stock}</p>
      <Button text="Galleria" clickFun={onBtnClick} />
    </div>
  );
};

export default CardCreator;
