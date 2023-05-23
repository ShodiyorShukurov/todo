import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext(null);

const Provider = ({ children }) => {

    const [controlled, setControlled] = React.useState([])
  return <Context.Provider value={{controlled, setControlled}}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
