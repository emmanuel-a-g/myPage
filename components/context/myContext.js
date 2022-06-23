import React, { useContext, useState, useEffect, useRef } from "react";

export const MyContext = React.createContext();
export function useMyContext() {
  return useContext(MyContext);
}
export function ContextProvider({ children }) {
  const [current, setView] = useState(0);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [matrix, setMatrix] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [highContrastStatus, setHighContrast] = useState(false);
  const matrixRef = useRef(null);
  
  useEffect(() => {
    console.log("Junbi..");
    setLoading(false);
    const timer = setTimeout(() => {
      if (!matrixRef.current) {
        setMatrix(prev => !prev);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [])

  useEffect(() => {
    matrixRef.current = matrix;
  }, [matrix]);

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

  function matrixToggle() {
    return setMatrix(prev => !prev);
  }

  function setMobileStatus() {
    return setMobile(prev => !prev);
  }
  const myValues = {
    current,
    name,
    highContrastStatus,
    date,
    matrix,
    mobile,
    updateView,
    sayHiTo,
    handleHighContrast,
    matrixToggle,
    setMobileStatus
  }

  return (
    <MyContext.Provider value={myValues}>
      {!loading && children}
    </MyContext.Provider>
  )
}
