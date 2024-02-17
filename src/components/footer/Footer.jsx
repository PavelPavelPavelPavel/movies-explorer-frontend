import { footerText, yaPraktik, gitHub } from "../../constants/words";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

    return (
      <footer className="footer">
        <p className="footer__text">{footerText}</p>
        <div className="footer__signature-wrapper"> 
          <p className="footer__signature-caption">{`©${year}`}</p>
          <ul className="footer__signature-label">
            <li className="footer__signature-label_item">
              <a href="https://practicum.yandex.ru/" 
                 target="blanc"
                 className="footer__signature-btn">{yaPraktik}</a>
              </li>
            <li className="footer__signature-label_item">
              <a href="https://github.com/" 
              target="blanc"
                 className="footer__signature-btn">{gitHub}</a>
              </li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;