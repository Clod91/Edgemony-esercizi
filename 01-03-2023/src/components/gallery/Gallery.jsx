import "./index.css";

const Gallery = () => {
  const galImg = [
    "https://lh3.googleusercontent.com/p/AF1QipNIZ1XnClvZLkxLNCMo7uQVMWcFSq2wrw34GR7q=w1080-h608-p-no-v0",
    "https://www.computershop.pisa.it/content/images/thumbs/0010646.jpeg",
    "https://www.florencefashiontour.com/wp-content/uploads/2021/07/perfume-shop-florence.jpg",
    "https://www.we-shop.it/wp-content/uploads/2021/04/we-shop_elettronica_telefoni_01.jpg",
  ];

  return (
    <div className="gallery">
      <h2>All Shop Gallery</h2>
      <div className="galleryImg">
        <img src={galImg[0]} alt="galleria" />
        <img src={galImg[1]} alt="galleria" />
      </div>
      <div className="galleryImg">
        <img src={galImg[2]} alt="galleria" />
        <img src={galImg[3]} alt="galleria" />
      </div>
    </div>
  );
};

export default Gallery;
