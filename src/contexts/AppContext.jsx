import React, { createContext, useState } from 'react'
export const Context = createContext();
export default function AppContext({children}) {
    const [toggle, setToggle] = useState(false)
    const [showModal, setShowModal] = useState(false);
  return (
    <Context.Provider value={{
      toggle,
      setToggle,
      showModal,
      setShowModal
      
      }}>
        {children}
    </Context.Provider>
  )
}
