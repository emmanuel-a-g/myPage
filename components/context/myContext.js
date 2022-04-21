import React, { useContext, useState, useEffect } from "react";

export const MyContext = React.createContext();
export function useMyContext() {
  return useContext(MyContext);
}
export function ContextProvider({ children }) {
  const [current, setView] = useState(1);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    console.log("Context starting...");
    setLoading(false)
  }, [])

  function updateView(num) {
    return setView(num);
  }

  const myValues = {
    current,
    updateView
  }

  return (
    <MyContext.Provider value={myValues}>
      {!loading && children}
    </MyContext.Provider>
  )
}
