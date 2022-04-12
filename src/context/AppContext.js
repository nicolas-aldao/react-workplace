import React, { useState } from "react";
import {useInitialState} from "../hooks/useInitialState";

const AppContext = React.createContext();
function AppContextProvider(props) {
  const [nameaplicacion, setNameAplicacion] = useState('flakito');
  const initialState = useInitialState();
  console.log('appcont: ' + JSON.stringify(initialState));
  const myComplexLogic = (text) => {
    console.log("i'm doing complex logic here");
    setNameAplicacion(text);
  }
  return (
    <AppContext.Provider value={{nameaplicacion, myComplexLogic, initialState}}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
