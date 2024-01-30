import useInput from "../../utils/chekInput";
import Form from "../form/Form";


function Login() {
    const email = useInput('');
    const password = useInput('');


   function handleSubmit() {
        
    }

    return (
        <Form 
            textSubmitBtn = "Войти"
            btnCapcha = "Ещё не зарегистрированы?"
            btn = "Регистрация"
            placeBtnSubmit="login"
            onSubmit={handleSubmit}
            >
            <div className="login">
                <label className="input__label">E-mail</label>
                <input 
                required
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                value={email.value}   
                className="input" 
                type="email"
                id="email"
                placeholder='Email'
                />
                <span className="input__error" id="register-email-error"></span>
                <label className="input__label">Пароль</label>
                <input 
                required
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
                value={password.value}    
                className="input" 
                type="password"
                id="password"
                placeholder='Имя'
                />
                <span className="input__error" id="register-password-error"></span>
             </div>
        </Form>
    );
  }
  
  export default Login;