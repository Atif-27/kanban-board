"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const DisplayContext = createContext();

// ! Fetched data is passed from server comp to client component
function DisplayProvider({ children, fetchedData }) {
  const [display, setDisplay] = useState({});
  const [data, setData] = useState(null);
  useEffect(() => {
    // ! Taking data from local storage if its available otherwise setting initial state

    setDisplay(
      JSON.parse(localStorage.getItem("display")) || {
        grouping: "status",
        ordering: "priority",
      }
    );
  }, []);
  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);

  // ! Setting the grouping
  function handleGrouping(value) {
    const newDisplay = { ...display, grouping: value };
    setDisplay(newDisplay);
    localStorage.setItem("display", JSON.stringify(newDisplay)); //Stroing in localStorage
  }
  // ! Setting the ordering
  function handleOrdering(value) {
    const newDisplay = { ...display, ordering: value };

    setDisplay(newDisplay);
    localStorage.setItem("display", JSON.stringify(newDisplay)); //Storing in localStorage
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

// ! Custom hook to consume context
export function useDisplay() {
  const context = useContext(DisplayContext);
  if (context === undefined) {
    throw new Error("useDisplay must be used within a DisplayProvider");
  }
  return context;
}
