import { useState } from "react";
import { useValidation } from "./UseValidation";

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setIsDirty(true)
    }

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        ...valid
    }
}
