import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  // making a piece of state out of a value in localStorage
  const[state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    }
    catch(e) {
      val = defaultVal;
    }
    return val;
  });
  // use useEffect to update localStorage when it changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  
  return [state,setState];
}

export default useLocalStorageState;