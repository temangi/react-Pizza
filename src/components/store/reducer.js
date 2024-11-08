

const stateDate = {
  cart:  [],
  filter : "",
  choice : ""
};

const forCart = (state = stateDate, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REDUCATION_CART":
      return { ...state, cart : action.payload};
    case "FILTER_PIZZA":
        return { ...state, filter : action.payload};
    case "CHOICE_PIZZA":
        return { ...state, choice : action.payload};
    default:
      return state;
  }
};

export default forCart;
