import closeBtnImg from "../../images/close-btn.svg";
import { dataChangedText } from "../../constants/messageText/successfullyDataChangedText";
function InfoPopup({onClosePopup}) {
 
function handleClose() {
    onClosePopup()
}

    return (
        <section className='infopopup'>
          <div className="infopopup__wrapper">
            <img onClick={handleClose} src={closeBtnImg} className="infopopup__close-btn" alt="Крест"/>
            <h1 className="infopopup__text">{dataChangedText}</h1>
          </div>
        </section>
    );
  }
  
  export default InfoPopup;