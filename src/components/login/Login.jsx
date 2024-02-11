import { useState, useEffect } from "react";
import Form from "../form/Form";

function Login({onLogin}) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [btnFormSumitState, setBtnFormSumitState] = useState(false);

    useEffect(() => {
        userEmail && userPassword ? setBtnFormSumitState(true) : setBtnFormSumitState(false);
    }, [userEmail, userPassword])

   function handleSubmit() {
        onLogin({
            email: userEmail, 
            password: userPassword,
        })
    }

    return (
        <Form 
            textSubmitBtn = "Войти"
            btnCapcha = "Ещё не зарегистрированы?"
            btn = "Регистрация"
            placeBtnSubmit="login"
            onSubmit={handleSubmit}
            btnFormSumitState={btnFormSumitState}
            >
            <section className="login">

                <label className="input__label">E-mail</label>
                <input 
                required   
                className="input" 
                type="email"
                id="email"
                placeholder='Ваш Email'
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                />
                <span className="input__error" htmlFor='email'></span>
                <label className="input__label">Пароль</label>
                <input 
                required
                minLength={4}
                maxLength={20}   
                className="input" 
                type="password"
                id="password"
                placeholder='Пароль'
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)} 
                />
                <span className="input__error" htmlFor='password'></span>
             </section>
        </Form>
    );
  }
  
  export default Login;