export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //   Calculate items price
  const itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + (item.price * 100 * item.qty) / 100,
    0
  );
  // state.itemsPrice = addDecimals(itemsPrice);
  // const itemsPrice = (state.itemsPrice = addDecimals(
  //   state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  // ));
  //   Calculate shipping price (if > $100 then free, else $10)
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  state.shippingPrice = addDecimals(shippingPrice);
  // state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
  //   Calculate tax price (15% tax)
  const taxPrice = 0.15 * itemsPrice;
  state.taxPrice = addDecimals(taxPrice);

  // state.taxPrice = addDecimals(Number((state.itemsPrice * 0.15).toFixed(2)));
  //   Calculate total price
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  state.totalPrice = addDecimals(totalPrice);
  // state.totalPrice = (
  //   Number(state.itemsPrice) +
  //   Number(state.shippingPrice) +
  //   Number(state.taxPrice)
  // ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
