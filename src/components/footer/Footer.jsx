function Footer() {
    return (
      <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="line line_place_footer"></div>
        <div className="footer__signature-wrapper"> 
          <p className="footer__signature-caption">©2020</p>
          <ul className="footer__signature-label">
            <li className="footer__signature-label_item">Яндекс.Практикум</li>
            <li className="footer__signature-label_item">Github</li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;