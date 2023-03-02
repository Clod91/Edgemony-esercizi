import "./App.css";
import { useState } from "react";
import { productsList } from "./mocks/products";
import ProductGallery from "./components/productGallery";
import HeaderEl from "./components/header";
import SideBar from "./components/sideBar";
import FooterEl from "./components/footer";
import Gallery from "./components/gallery";
import Main from "./components/main";

const App = () => {
  const [darkMode, setDarkmode] = useState(false);
  const [productGallery, setProductGallery] = useState(null);

  return (
    <div className={`Main ${darkMode && "dark_mode"}`}>
      <HeaderEl />
      <SideBar />
      <Gallery />
      <Main products={productsList} setProductGallery={setProductGallery} />
      <FooterEl />
      <button className="toggle" onClick={() => setDarkmode((prev) => !prev)}>
        {darkMode ? "👎" : "👍"}
      </button>
      {productGallery ? (
        <ProductGallery
          product={productGallery}
          setProductGallery={setProductGallery}
        />
      ) : null}
    </div>
  );
};

export default App;
