import "../../index.css";
import Header from '../header/Header'
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Notfounderr from '../notfounderr/Notfounderr';
import Promo from '../promo/Promo';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Main>
        <Promo></Promo>
      </Main>
      {/* <Footer></Footer> */}
      {/* <Notfounderr /> */}
    </div >
  );
}

export default App;
