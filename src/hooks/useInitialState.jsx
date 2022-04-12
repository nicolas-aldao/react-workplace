import { useState } from "react";

const initialState = {
  cart: [],
  userNumber: 10,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    const newItem = {
      id: state.cart.length + 1,
      text: payload,
    };
    const newTotalItem = state.cart;
    newTotalItem.push(newItem);
    setState({
      ...state,
      cart: newTotalItem,
    });
  };
  const addUser = (e) => {
    setState((prevState) => ({
      cart: prevState.cart,
      userNumber: prevState.userNumber + 1,
    }));
    console.log(state.cart);
  };
  return {
    state,
    addUser,
    addToCart,
  };
};

export { useInitialState };
