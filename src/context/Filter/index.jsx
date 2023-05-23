import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [filter, setFilter] = React.useState("All");
  return (
    <Context.Provider value={{ filter, setFilter }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
