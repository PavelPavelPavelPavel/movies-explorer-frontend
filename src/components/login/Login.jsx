import Form from "../form/Form";

function Login() {

    return (
        <Form 
            textSubmitBtn = "Войти"
            btnCapcha = "Ещё не зарегистрированы?"
            btn = "Регистрация"
            placeBtnSubmit="login"
            >
            <div className="login">
                <label className="input__label">E-mail</label>
                <input 
                required
                className="input" 
                type="email"
                id="email"
                />
                <span 
                className="input__error"
                id="register-email-error"
                ></span>
                <label className="input__label">Пароль</label>
                <input 
                required
                className="input" 
                type="password"
                id="password"
                />
                <span 
                className="input__error"
                id="register-password-error"
                ></span>
            </div>
        </Form>
    );
  }
  
  export default Login;