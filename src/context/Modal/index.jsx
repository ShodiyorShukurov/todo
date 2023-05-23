import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [modal, setModal] = React.useState(false);
  return (
    <Context.Provider value={{ modal, setModal }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
