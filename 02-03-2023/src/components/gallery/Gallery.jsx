import { useState } from "react";
import "./index.css";

const Gallery = () => {
  const galImg = [
    "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg",
    "https://www.computershop.pisa.it/content/images/thumbs/0010646.jpeg",
    "https://www.florencefashiontour.com/wp-content/uploads/2021/07/perfume-shop-florence.jpg",
    "https://www.we-shop.it/wp-content/uploads/2021/04/we-shop_elettronica_telefoni_01.jpg",
  ];
  let [displayImg, setDisplayimg] = useState(0);

  return (
    <div className="gallery">
      <h2>All Shop Gallery</h2>
      <img src={galImg[displayImg]} alt="galleria" />
      <div className="btn-container">
        <button
          className="btn1"
          onClick={() => setDisplayimg((displayImg = 0))}
        ></button>
        <button
          className="btn1"
          onClick={() => setDisplayimg((displayImg = 1))}
        ></button>
        <button
          className="btn1"
          onClick={() => setDisplayimg((displayImg = 2))}
        ></button>
        <button
          className="btn1"
          onClick={() => setDisplayimg((displayImg = 3))}
        ></button>
      </div>
    </div>
  );
};

export default Gallery;
