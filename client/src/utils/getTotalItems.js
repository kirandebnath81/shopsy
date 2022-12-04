const getTotalItems = (items) => {
  let total = 0;

  items.forEach((item) => {
    total = total + item.count;
  });

  return total;
};

export default getTotalItems;
