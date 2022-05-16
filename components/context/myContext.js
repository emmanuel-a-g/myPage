import React, { useContext, useState, useEffect } from "react";

export const MyContext = React.createContext();
export function useMyContext() {
  return useContext(MyContext);
}
export function ContextProvider({ children }) {
  const [current, setView] = useState(0);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [highContrastStatus, setHighContrast] = useState(false);
  
  useEffect(() => {
    console.log("App starting...");
    setLoading(false)
  }, [])

  function updateView(num) {
    return setView(num);
  }

  function sayHiTo(name, date) {
    setDate(date);
    return setName(name);
  }

  function handleHighContrast() {
    return setHighContrast(prev => !prev);
  }

  const myValues = {
    current,
    name,
    highContrastStatus,
    date,
    updateView,
    sayHiTo,
    handleHighContrast,
  }

  return (
    <MyContext.Provider value={myValues}>
      {!loading && children}
    </MyContext.Provider>
  )
}
