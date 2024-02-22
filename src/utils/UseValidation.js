import { useState, useEffect } from "react";

export const useValidation = (value, validations) => {
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'email':
                    validations[validation].test(value.toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break
                default:
                    break
            }
        }
    }, [value])

    return {
        minLengthError,
        emailError,
        maxLengthError,
        isEmpty
    }
};


