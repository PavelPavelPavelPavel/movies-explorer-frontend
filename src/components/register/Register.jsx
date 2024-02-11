import Form from "../form/Form";
import { useState, useEffect } from "react";
import { useInput } from "../../utils/UseInput";
import { emailRegex } from "../../constants/regexp";
import { emailError, nameError } from "../../constants/errorText/formError";

function Register({onUserRegister}) {
    const userName = useInput('', {minLength: 2, maxLength: 30, isEmpty: true});
    const userEmail = useInput('', {email: emailRegex});
    const userPassword = useInput('', {minLength: 2, maxLength: 30});
    const [btnFormSumitState, setBtnFormSumitState] = useState(false);
   console.log(userName.isEmpty)


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

    function setErrorText(text, option) {
       return  option ?
                text :
                ''
    }

    function handleSubmit() {
        onUserRegister({
            name: userName,
            email: userEmail,
            password: userPassword,
        })
    }

    return (
        <Form 
            textSubmitBtn = "Зарегистрироваться"
            btnCapcha = "Уже зарегистрированы?"
            btn = "Войти"
            placeBtnSubmit="register"
            onSubmit={handleSubmit}
            btnFormSumitState={btnFormSumitState}
            >
            <section className="register">
                <label className="input__label">Имя</label>
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
                    (!userName.isEmpty || userName.isDirty) &&
                    (userName.minLengthError ||
                    userName.maxLengthError) ?
                    nameError :
                    ''
                }</span>
                <label className="input__label">E-mail</label>
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
                <span className="input__error" htmlFor='email'>{}</span>
                <label className="input__label">Пароль</label>
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
                <span className="input__error" htmlFor='password'>{}</span>
            </section>
        </Form>
    );
  }
  
  export default Register;