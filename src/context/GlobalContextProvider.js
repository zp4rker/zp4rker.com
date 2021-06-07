import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  menu: false,
}

const reducer = (state, action) => {
  switch(action.type){
    case "TOGGLE_MENU": {
      return {
        ...state,
        menu: !state.menu
      }
    }
    case "TOGGLE_MENU_FALSE": {
      return {
        ...state,
        menu: false
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider