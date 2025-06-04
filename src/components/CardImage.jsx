import "../assets/component-styles/CardImage.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function CardImage({ source, caption, addedToFavourite }) {
  return (
    <div className="card-image">
      <img src={source} />
      <div className="card-image-footer">
        <p>{caption}</p>
        <p>{addedToFavourite ? <FaHeart /> : <FaRegHeart />}</p>
      </div>
    </div>
  );
}
