import React from "react";
import { useContext } from "react/cjs/react.development";
//
import { Footer } from "../Footer";
import { Header } from "../Header";
import { AppContext } from "../../context/AppContext";

const Layout = ({ children }) => {
  // it'll receive children to contain them
  return (
    <React.Fragment>
      <Header></Header>
      <div className="layout">{children}</div>
      <AppContext.Consumer>
        {({nameaplicacion}) => (
          <Footer myParameter={nameaplicacion}></Footer>
        )}
      </AppContext.Consumer>
    </React.Fragment>
  );
};

export default Layout;
