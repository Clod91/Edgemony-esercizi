import style from "./index.module.scss";

const Layout = ({ children }) => {
  return <div className={style.Layout}>{children}</div>;
};

export default Layout;
