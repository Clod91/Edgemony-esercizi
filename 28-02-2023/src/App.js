import "./App.css";
import HeaderEl from "./components/header";
import FooterEl from "./components/footer";
// import item from "./mocks/item";
import Main from "./components/main";

const App = () => {
  const item = {
    title: "gattini",
    img: [
      "https://www.villaggionatura.com/shop/modules/ph_simpleblog/featured/28.jpg",
      "https://www.zooplus.it/magazine/wp-content/uploads/2018/01/fotolia_60709984-768x510.jpg",
    ],
  };

  return (
    <div className="App">
      <HeaderEl />
      <Main gatti={item} />
      <FooterEl />
    </div>
  );
};

export default App;
