import Form from "../form/Form";
import { useState, useEffect } from "react";
import { useInput } from "../../utils/UseInput";
import { emailRegex } from "../../constants/regexp";
import { emailError, lengthError } from "../../constants/errorText/formError";
import { alredyRegistered, onRegister, password, name, email } from "../../constants/words";

function Register({onUserRegister, errorText}) {
    const userName = useInput('', {minLength: 2, maxLength: 30, isEmpty: true});
    const userEmail = useInput('', {email: emailRegex, isEmpty: true});
    const userPassword = useInput('', {minLength: 2, maxLength: 30, isEmpty: true});
    const [btnFormSumitState, setBtnFormSumitState] = useState(false);

    useEffect(() => {
        if(userEmail.emailError || 
            userName.minLengthError ||
            userName.maxLengthError ||
            userPassword.minLengthError ||
            userPassword.maxLengthError
            ) {
                setBtnFormSumitState(false)
            } else {
                setBtnFormSumitState(true)
            }
    }, [userEmail, userName, userPassword])


    function handleSubmit() {
        onUserRegister({
            name: userName.value,
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
            textSubmitBtn = {onRegister}
            btnCapcha = {alredyRegistered}
            btn = "Войти"
            placeBtnSubmit="register"
            onSubmit={handleSubmit}
            btnFormSumitState={btnFormSumitState}
            errorText={errorText}
            >
            <section className="register">
                <label className="input__label">{name}</label>
                <input 
                required
                className="input" 
                type="string"
                id="name"
                placeholder="Ваше имя"
                minLength={2}
                maxLength={20}
                defaultValue={userName.value}
                onChange={(e) => userName.onChange(e)}  
                onBlur={(e) => userName.onBlur(e)}
                />
                <span className="input__error" htmlFor='name'>{
                    setErrorText(userName, (userName.minLengthError || userName.maxLengthError), lengthError)
                    }
                </span>
                <label className="input__label">{email}</label>
                <input 
                required
                className="input" 
                type="email"
                id="email"
                placeholder="Ваш Email"
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
                className="input" 
                type="password"
                id="password"
                placeholder="Придумайте пароль"
                minLength={4}
                maxLength={20} 
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
  
  export default Register;