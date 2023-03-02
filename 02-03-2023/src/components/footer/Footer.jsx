import "./index.css";

const logo =
  "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350";
const FooterEl = () => {
  return (
    <footer className="footer">
      <p>nessun nuovo aggiornamento</p>
      <img src={logo} alt="logo" />
    </footer>
  );
};

export default FooterEl;
