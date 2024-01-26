import Form from "../form/Form";

function Register() {

    return (
        <Form 
            textSubmitBtn = "Зарегистрироваться"
            btnCapcha = "Уже зарегистрированы?"
            btn = "Войти"
            placeBtnSubmit="register"
            >
            <div className="register">
                <label className="input__label">Имя</label>
                <input 
                required
                className="input" 
                type="string"
                id="name"
                />
                <span 
                className="input__error"
                id="register-name-error"
                ></span>
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
  
  export default Register;