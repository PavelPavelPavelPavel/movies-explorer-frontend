import Promo from "../promo/Promo";
import Aboutproject from "../aboutproject/Aboutproject";
import Techs from "../techs/Techs";
import Aboutme from "../aboutme/Aboutme";

function Main() {
	return (
		<div className='main-landing'>
			<Promo />
			<Aboutproject />
			<Techs />
			<Aboutme />
		</div>
	);
}

export default Main;
