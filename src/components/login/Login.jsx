import { useState, useEffect } from "react";
import Form from "../form/Form";
import { useInput } from "../../utils/UseInput";
import { emailRegex } from "../../constants/regexp";
import { emailError, lengthError } from "../../constants/errorText/formError";
import { enter, notRegistered, register, email, password } from "../../constants/words";

function Login({onLogin, errorText}) {
    const userEmail = useInput('', {email: emailRegex, isEmpty: true});
    const userPassword = useInput('', {minLength: 2, maxLength: 30, isEmpty: true});
    const [btnFormSumitState, setBtnFormSumitState] = useState(false);

    useEffect(() => {
        if(userEmail.emailError || 
            userPassword.minLengthError ||
            userPassword.maxLengthError
            ) {
                setBtnFormSumitState(false)
            } else {
                setBtnFormSumitState(true)
            }
    }, [userEmail, userPassword])

   function handleSubmit() {
        onLogin({
            email: userEmail.value, 
            password: userPassword.value,
        })
    }

    function setErrorText(input, option, text) {
        return (!input.isEmpty || input.isDirty) &&
        option ?
        text :
        ''
    }

    return (
        <Form 
            textSubmitBtn = {enter}
            btnCapcha = {notRegistered}
            btn = {register}
            placeBtnSubmit="login"
            onSubmit={handleSubmit}
            btnFormSumitState={btnFormSumitState}
            errorText={errorText}
            >
            <section className="login">

                <label className="input__label">{email}</label>
                <input 
                required   
                className="input" 
                type="email"
                id="email"
                placeholder='Ваш Email'
                defaultValue={userEmail.value}
                onChange={(e) => userEmail.onChange(e)}
                onBlur={(e) => userEmail.onBlur(e)}
                />
                <span className="input__error" htmlFor='email'>{
                     setErrorText(userEmail, (userEmail.emailError), emailError)
                     }
                    </span>
                <label className="input__label">{password}</label>
                <input 
                required
                minLength={4}
                maxLength={20}   
                className="input" 
                type="password"
                id="password"
                placeholder='Пароль'
                defaultValue={userPassword.value}
                onChange={(e) => userPassword.onChange(e)}
                onBlur={(e) => userPassword.onBlur(e)}
                />
                <span className="input__error" htmlFor='password'>{
                     setErrorText(userPassword, (userPassword.minLengthError || userPassword.maxLengthError), lengthError)
                     }
                     </span>
             </section>
        </Form>
    );
  }
  
  export default Login;