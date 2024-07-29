import { Link } from "react-router-dom";
import "./ProductCard.scss";

const Card = ({ src, title, link }) => {
  return (
    <Link
      to={link}
      className="product-card rounded-md overflow-hidden flex-grow"
    >
      {/* <div className="inner-card w-full"> */}
      <img
        className="front-face h-[50svh] w-[100%] object-cover"
        src={src}
        alt={src}
      />
      <h3 className="back-face text-theme-white text-xl xl:text-3xl">
        {title}
      </h3>
      {/* </div> */}
    </Link>
  );
};

export default Card;
