//styles
import { StyledProduct, TopContainer, BottomContainer } from "./Product.styles";
import { ButtonFill, ButtonOutline } from "../../styles/Main.styles";

//utils
import {
  getStarIcons,
  getProductPrice,
  addToWishlist,
  setCartItems,
  getUnavailableItems,
} from "../../utils";

import { useAuth, useProducts } from "../../contexts";
import { useNavigate } from "react-router-dom";

const Product = ({ item, type }) => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { wishlist, cartItems } = useProducts();

  //navigate to the single product page
  const clickHandler = () => {
    navigate(`/product/${item?.id}`);
  };

  //add to cart
  const cartHandler = () => {
    if (user) {
      setCartItems(user, cartItems, item);
    } else {
      navigate("/signin");
      window.scroll(0, 0);
    }
  };

  //check whether the product already exists in the cart
  const checkHandler = () => cartItems.find(({ id }) => id === item.id);

  return (
    <StyledProduct>
      <TopContainer>
        <div className="product__wishlist-btn">
          {addToWishlist(user, wishlist, item)}
        </div>
        <img src={item?.image} alt="product img" onClick={clickHandler} />
      </TopContainer>

      <BottomContainer>
        <div className="product__title" onClick={clickHandler}>
          {item?.title.slice(0, 15)} ...
        </div>
        <div className="product__price">{getProductPrice(item?.price)}</div>
        <div className="product__rating">
          {getStarIcons(item?.rating.rate)?.map((star, i) => (
            <span key={i}>{star} </span>
          ))}
        </div>

        {type === "wishlist" &&
          (getUnavailableItems(item.id) ? (
            <ButtonOutline className="product__cart-btn product__cart-btn--stock">
              Out of Stock
            </ButtonOutline>
          ) : (
            <>
              {checkHandler() ? (
                <ButtonFill
                  className="product__cart-btn"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart
                </ButtonFill>
              ) : (
                <ButtonOutline
                  className="product__cart-btn"
                  onClick={cartHandler}
                >
                  Add to Cart
                </ButtonOutline>
              )}
            </>
          ))}
      </BottomContainer>
    </StyledProduct>
  );
};

export default Product;
