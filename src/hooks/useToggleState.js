import { useState } from "react";

function useToggleState(initialVal = false) {
  // call useState a piece of reserved state
  const [state, setState] = useState(initialVal); 
  const toggle = () => {
    setState(!state);
  };
  // return piece of STATE and a FUNCTION to toggle it
  return [state, toggle];
}




export default useToggleState;