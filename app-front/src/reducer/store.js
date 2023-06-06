import Utils from "../service/Utils";
import React, { createContext, useReducer } from "react";

const initialState = {
  user: [],
  users: [],
  plantesList:[],
  isAuth:Utils.checkToken(),
}

const store = createContext(initialState);
const { Provider } = store;
const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((curState, action) => {
      switch (action.type) {
        case "SET_LOADER": {
          const newState = {
            ...curState,
            loader: action.payload,
          };
          return newState;
        }
        
        case "SET_AUTH": {
          const newState = {
            ...curState,
            isAuth: action.payload,
          };
          return newState;
        }
        case "SET_PLANTLIST": {
          const newState = {
            ...curState,
            plantesList: action.payload,
          };
          return newState;
        }
        case "SET_USER": {
          const newState = {
            ...curState,
            user: action.payload,
          };
          return newState;
        }
        
       
        case "SET_LOGOUT": {
          const newState = {
            loader: false,
            isAuth: action.payload,
            user: [],
            users: [],

          };
          return newState;
        }
        
        default:
          throw new Error();
      }
    }, initialState);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
  };
  export { store, StateProvider };