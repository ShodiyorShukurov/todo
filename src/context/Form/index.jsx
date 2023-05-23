import React from "react";
import PropTypes from "prop-types";


const Context = React.createContext(null);

const Provider = ({ children }) => {
    const [todos, setTodos] = React.useState([])
  return (
    <Context.Provider value={{todos, setTodos}}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
