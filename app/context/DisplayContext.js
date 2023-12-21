"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const DisplayContext = createContext();

const initialState =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("display")) || {
        grouping: "status",
        ordering: "priority",
      }
    : {
        grouping: "status",
        ordering: "priority",
      };
function DisplayProvider({ children }) {
  const [display, setDisplay] = useState(initialState);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(process.env.BOARD_API);
      const fetchedData = await res.json();
      setData(fetchedData);
    }
    fetchData();
  }, []);

  function handleGrouping(value) {
    const newDisplay = { ...display, grouping: value };
    setDisplay(newDisplay);
    localStorage.setItem("display", JSON.stringify(newDisplay));
  }
  function handleOrdering(value) {
    const newDisplay = { ...display, ordering: value };

    setDisplay(newDisplay);
    localStorage.setItem("display", JSON.stringify(newDisplay));
  }

  return (
    <DisplayContext.Provider
      value={{ display, handleGrouping, handleOrdering, data }}
    >
      {children}
    </DisplayContext.Provider>
  );
}

export default DisplayProvider;

export function useDisplay() {
  const context = useContext(DisplayContext);
  if (context === undefined) {
    throw new Error("useDisplay must be used within a DisplayProvider");
  }
  return context;
}
