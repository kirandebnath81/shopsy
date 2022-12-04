const getTotalPrice = (cartItems) => {
  let total = 0;

  cartItems.forEach((item) => {
    total = total + item.price * item.count;
  });

  total = Number((total * 70).toFixed(0));

  return total;
};

export default getTotalPrice;
