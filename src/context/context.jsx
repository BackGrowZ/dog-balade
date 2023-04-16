import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

const APIContext = createContext([]);

const APIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <APIContext.Provider value={[state, dispatch]}>{children}</APIContext.Provider>;
};

export { APIContext, APIProvider };
