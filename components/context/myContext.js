import React, { useContext, useState, useEffect } from "react";

export const MyContext = React.createContext();
export function useMyContext() {
  return useContext(MyContext);
}
export function ContextProvider({ children }) {
  const [current, setView] = useState(1);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  
  useEffect(() => {
    console.log("Context starting...");
    setLoading(false)
  }, [])

  function updateView(num) {
    return setView(num);
  }

  function sayHiTo(name) {
    return setName(name); 
  }
  const myValues = {
    current,
    name,
    updateView,
    sayHiTo,
  }

  return (
    <MyContext.Provider value={myValues}>
      {!loading && children}
    </MyContext.Provider>
  )
}
