import React from "react";
import PropTypes from "prop-types";
import { Provider as FormProvider } from "./Form";
import { Provider as EditProvider } from "./Edit";
import { Provider as ControlledProvider } from "./Controlled";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <FormProvider>
        <EditProvider>
          <ControlledProvider>{children}</ControlledProvider>
        </EditProvider>
      </FormProvider>
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
