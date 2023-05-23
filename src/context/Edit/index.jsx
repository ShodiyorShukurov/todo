import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <Context.Provider value={{ selectedIndex, setSelectedIndex }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
