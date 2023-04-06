import style from "./index.module.scss";
import Link from "next/link";

const Card = (props) => {
  return (
    <div className={style.Card}>
      <Link href={"/blog/" + props?.id}>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </Link>
    </div>
  );
};

export default Card;
