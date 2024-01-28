import { useNavigate } from "react-router-dom";

function Notfounderr() {
  const navigate = useNavigate();

  function returnToMainPage () {
    navigate("/")
  }

    return (
      <div className="notfounderr">
        <h2 className="notfounderr__code">404</h2>
        <p className="notfounderr__text">Страница не найдена</p>
        <button className="notfounderr__btn" onClick={returnToMainPage}>Назад</button>
      </div>
    );
  }
  
  export default Notfounderr;