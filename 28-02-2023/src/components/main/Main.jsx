import "./index.css";

const Main = ({ gatti }) => {
  console.log(gatti.title);
  return (
    <div className="main">
      <h2 className="title">Notizie!</h2>
      <p>
        sono successe varie cose nel mondo ma non c'è tempo per sviscerarle
        tutte, in compenso eccoti delle foto di {gatti.title}
      </p>
      <img src={gatti.img[0]} alt="gattini" />
      <img src={gatti.img[1]} alt="gattini" />
    </div>
  );
};

export default Main;
