import "./index.css";

const ProductGallery = ({ product, setProductGallery }) => {
  return (
    <div className="product_gallery">
      <div
        className="gallery_overlay"
        onClick={() => setProductGallery(null)}
      ></div>
      {product.images.map((img) => (
        <img src={img} alt="immagini di repertorio" />
      ))}
    </div>
  );
};

export default ProductGallery;
