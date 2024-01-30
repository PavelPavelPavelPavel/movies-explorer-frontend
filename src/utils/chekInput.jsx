import { useState } from "react";


 const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [onInput, setOnInput] = useState(false);
   
    function onChange(e) {
        setValue(e.target.value);
    }

   function onBlur(e) {
        setOnInput(true);
   }

   return {
        value,
        onChange,
        onBlur,
        onInput,
   }
}   

export default useInput;