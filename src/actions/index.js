export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const CLEAR_CART = "CLEAR_CART";

export const increment = () => {
  return { type: "INCREMENT" };
};
export const decrement = () => {
  return { type: "DECREMENT" };
};
export const clear_cart = () => {
  return { type: "CLEAR_CART" };
};
