import { useNavigate } from "react-router-dom";

function Notfounderr() {
  const navigate = useNavigate();

  function goBack () {
    navigate(-1)
  }

    return (
      <div className="notfounderr">
        <h1 className="notfounderr__code">404</h1>
        <p className="notfounderr__text">Страница не найдена</p>
        <button className="notfounderr__btn" onClick={goBack}>Назад</button>
      </div>
    );
  }
  
  export default Notfounderr;