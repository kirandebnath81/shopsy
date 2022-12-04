import { useEffect, useState } from "react";

import axios from "axios";

//icons
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

//styles
import {
  Row,
  ColOne,
  ColTwo,
  RatingBox,
  DescBox,
  QuantityBox,
} from "./SingleProduct.styles";
import { ButtonFill, ButtonOutline } from "../../styles/Main.styles";

//utils
import {
  getStarIcons,
  getProductPrice,
  getUnavailableItems,
  getFastDeliveryItems,
  setCartItems,
  addToWishlist,
} from "../../utils";

//router
import { useNavigate, useParams } from "react-router-dom";

//context
import { useAuth, useProducts } from "../../contexts";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //central state
  const { user } = useAuth();
  const { cartItems, wishlist } = useProducts();

  //local state
  const [productData, setProductData] = useState({});
  const { count, image, rating, title, description, price } = productData;

  //api call to get  the product data
  useEffect(() => {
    fetchData(id);
    window.scroll(0, 0);
  }, [id]);

  const fetchData = async (id) => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProductData({ ...data, count: 1 });
    } catch (error) {
      console.log(error);
    }
  };

  //decrease product quantity
  const deleteHandler = () => {
    if (count > 1) {
      setProductData((prev) => ({ ...prev, count: prev.count - 1 }));
    }
  };

  //add item to cart
  const cartHandler = () => {
    if (user) {
      setCartItems(user, cartItems, productData);
    } else {
      navigate("/signin");
    }
  };

  //check whether the product already exists in the cart
  const checkHandler = () => cartItems.find(({ id }) => id === productData.id);

  return (
    <Row>
      <ColOne>
        <div>{addToWishlist(user, wishlist, productData)}</div>
        <img src={image} alt={title} />
      </ColOne>
      <ColTwo>
        <div className="product__title">{title}</div>
        <RatingBox>
          {getStarIcons(rating?.rate)?.map((star, i) => (
            <span className="product__rating-icon" key={i}>
              {star}
            </span>
          ))}
          <span className="product__rating-count">({80 + productData.id})</span>
        </RatingBox>
        <DescBox>
          <div className="product__desc-title">Details :</div>
          <div className="product__desc-content">
            {description?.slice(0, 190)}.
          </div>
        </DescBox>

        {getFastDeliveryItems(productData.id) && (
          <div className="product__delivery">Fast Delivery is available</div>
        )}

        <div className="product__price">{getProductPrice(price)}</div>
        <QuantityBox>
          <div className="product__Qty-title">Quantity :</div>
          <div className="product__Qty-content">
            <div className="product__Qty-delete" onClick={deleteHandler}>
              <AiOutlineMinus />
            </div>
            <div>{count}</div>
            <div
              className="product__Qty-add"
              onClick={() =>
                setProductData((prev) => ({ ...prev, count: prev.count + 1 }))
              }
            >
              <IoMdAdd />
            </div>
          </div>
        </QuantityBox>

        <div className="product__btns">
          {getUnavailableItems(productData.id) ? (
            <ButtonOutline className="product__stock-btn">
              Out of Stock
            </ButtonOutline>
          ) : (
            <>
              {checkHandler() ? (
                <ButtonFill onClick={() => navigate("/cart")}>
                  Go to Cart
                </ButtonFill>
              ) : (
                <ButtonOutline onClick={cartHandler}>Add to Cart</ButtonOutline>
              )}
            </>
          )}
        </div>
      </ColTwo>
    </Row>
  );
};

export default SingleProduct;
