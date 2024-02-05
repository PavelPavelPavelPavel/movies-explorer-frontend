import closeBtn from '../../images/close-btn.svg';
import profile from '../../images/profile.svg';
import Navbar from '../navbar/Navbar';

function NavigatePopup({ initModalNavbar, placeAccBtn, navToAcc, modalState, navToMain, navToSavedFilms, navToFilms}) {
   
    function closeNavbar() {
        initModalNavbar();
    }

    function handleAccClick() {
        navToAcc();
        initModalNavbar();
    }
    
    return (
        <div className='navigatepopup'>
            <div className='navigatepopup__wrapper'>
                <img src={closeBtn} alt='Крест' className='navigatepopup__btn-close' onClick={closeNavbar}/>
                <Navbar 
                modalState={modalState}
                navToFilms={navToFilms}
                navToSavedFilms={navToSavedFilms}
                navToMain={navToMain}
                />
                <button onClick={handleAccClick} className="header__btn header__btn-acc_place_droplist"> 
                    <img src ={profile} className="header__btn header__btn-auth" alt="Информация аккаунта"></img> 
                </button> 
            </div>
        </div>
    );
  }
  
  export default NavigatePopup;