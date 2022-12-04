import numeral from "numeral";

const getProductPrice = (price) => {
  const newPrice = numeral((price * 70).toFixed(0)).format("0,0");
  return <>&#8377; {newPrice}</>;
};

export default getProductPrice;
