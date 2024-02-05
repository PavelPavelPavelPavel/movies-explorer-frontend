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
            <section className="login">
                <label className="input__label">E-mail</label>
                <input 
                required
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                value={email.value}   
                className="input" 
                type="email"
                id="email"
                placeholder='Ваш Email'
                />
                <label className="input__label">Пароль</label>
                <input 
                required
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
                value={password.value} 
                minLength={4}
                maxLength={20}   
                className="input" 
                type="password"
                id="password"
                placeholder='Имя'
                />
             </section>
        </Form>
    );
  }
  
  export default Login;