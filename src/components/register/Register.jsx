import Form from "../form/Form";

function Register() {

    function handleSubmit() {
        
    }

    return (
        <Form 
            textSubmitBtn = "Зарегистрироваться"
            btnCapcha = "Уже зарегистрированы?"
            btn = "Войти"
            placeBtnSubmit="register"
            onSubmit={handleSubmit}
            >
            <div className="register">
                <label className="input__label">Имя</label>
                <input 
                required
                className="input" 
                type="string"
                id="name"
                placeholder="Ваше имя"
                minLength={2}
                maxLength={20}  
                />
                <label className="input__label">E-mail</label>
                <input 
                required
                className="input" 
                type="email"
                id="email"
                placeholder="Ваш Email"
                />
                <label className="input__label">Пароль</label>
                <input 
                required
                className="input" 
                type="password"
                id="password"
                placeholder="Придумайте пароль"
                minLength={4}
                maxLength={20} 
                />
            </div>
        </Form>
    );
  }
  
  export default Register;