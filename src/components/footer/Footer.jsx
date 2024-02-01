function Footer() {
  const date = new Date();
  const year = date.getFullYear();

    return (
      <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__signature-wrapper"> 
          <p className="footer__signature-caption">{`©${year}`}</p>
          <ul className="footer__signature-label">
            <li className="footer__signature-label_item">
              <a href="https://practicum.yandex.ru/" 
                 target="blanc"
                 className="footer__signature-btn">Яндекс.Практикум</a>
              </li>
            <li className="footer__signature-label_item">
              <a href="https://github.com/" 
              target="blanc"
                 className="footer__signature-btn">Github</a>
              </li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;