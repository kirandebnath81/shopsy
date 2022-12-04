//icons
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const getStars = (rating) => {
  if (rating === 2) {
    return [<BsStarFill />, <BsStarFill />];
  } else if (rating === 3) {
    return [<BsStarFill />, <BsStarFill />, <BsStarFill />];
  } else if (rating === 4) {
    return [<BsStarFill />, <BsStarFill />, <BsStarFill />, <BsStarFill />];
  }
};

const getStarIcons = (rating) => {
  if (rating === 0) {
    return [<BsStar />, <BsStar />, <BsStar />, <BsStar />, <BsStar />];
  } else if (rating === 1) {
    return [<BsStarFill />, <BsStar />, <BsStar />, <BsStar />, <BsStar />];
  } else if (rating > 1.7 && rating < 2.4) {
    return [...getStars(2), <BsStar />, <BsStar />, <BsStar />];
  } else if (rating >= 2.4 && rating < 2.8) {
    return [...getStars(2), <BsStarHalf />, <BsStar />, <BsStar />];
  } else if (rating >= 2.8 && rating < 3.4) {
    return [...getStars(3), <BsStar />, <BsStar />];
  } else if (rating >= 3.4 && rating < 3.8) {
    return [...getStars(3), <BsStarHalf />, <BsStar />];
  } else if (rating >= 3.8 && rating < 4.4) {
    return [...getStars(4), <BsStar />];
  } else if (rating >= 4.4 && rating < 4.8) {
    return [...getStars(4), <BsStarHalf />];
  } else if (rating >= 4.8) {
    return [...getStars(4), <BsStarFill />];
  }
};

export default getStarIcons;
