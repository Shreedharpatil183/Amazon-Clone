// setup data layer
// we need to tract this the basket

import React, { createContext, useContext, useReducer } from "react"

// THIS IS DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside of a commponent
export const useStatevalue = () => useContext(StateContext);
