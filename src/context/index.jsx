import React from "react";
import PropTypes from "prop-types";
import { Provider as FilterProvider } from "./Filter";
import { Provider as ModalProvider } from "./Modal";
import { Provider as FormProvider } from "./Form";
import { Provider as EditProvider } from "./Edit";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <FormProvider>
        <EditProvider>
          <ModalProvider>
            <FilterProvider>{children}</FilterProvider>
          </ModalProvider>
        </EditProvider>
      </FormProvider>
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
