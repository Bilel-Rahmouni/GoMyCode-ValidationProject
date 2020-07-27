import { INCREMENT, DECREMENT, CLEAR_CART } from "../actions/actionType";
const initialState = { counter: 0 };

const counter = (state = initialState.counter, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state > 0 ? state - 1 : state;
    case CLEAR_CART:
      return 0;
    default:
      return state;
  }
};

export default counter;
