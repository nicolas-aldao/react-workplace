import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useInitialState } from "../../hooks/useInitialState";
//components
// styles

const Header = () => {
  const [newProduct, setNewProduct] = useState("");
  const { nameaplicacion, myComplexLogic } = useContext(AppContext);
  const { state, addUser, addToCart } = useInitialState();
  const onChange = (e) => {
    setNewProduct(e.target.value);
    console.log(e.target.value);
  };
  const handleClickUserButton = (e) => {
    addUser(e);
  };
  const handleClick = (e) => {
    myComplexLogic("YE!");
  };
  const handleClick2 = (e) => {
    addToCart(newProduct);
    console.log(JSON.stringify(state.cart));
  };
  return (
    <div>
      <p>header!</p>
      <h1>My app's name is {nameaplicacion}</h1>
      <button type="button" onClick={handleClick}>
        click me
      </button>
      <h2>Users</h2>
      <button type="button" onClick={handleClickUserButton}>
        Add an user!
      </button>
      <h3>Number of users: {JSON.stringify(state.userNumber)}</h3>
      <input type="text" onChange={onChange} />
      <button type="button" onClick={handleClick2}>
        Submit product
      </button>
      <ul>
        {state.cart.map((p) => (
          <li key={p.id}>
            {p.id} {p.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Header };
