import "./App.css";
import HeaderEl from "./components/header";
import SideBar from "./components/sideBar";
import FooterEl from "./components/footer";
import Gallery from "./components/gallery";
import { productsList } from "./mocks/products";
import Main from "./components/main";

const App = () => {
  return (
    <div className="App">
      <HeaderEl />
      <SideBar />
      <Gallery />
      <Main products={productsList} />
      <FooterEl />
    </div>
  );
};

export default App;
