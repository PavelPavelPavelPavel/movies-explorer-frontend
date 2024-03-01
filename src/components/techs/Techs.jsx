import {
	myReact,
	techs,
	techsHeader,
	html,
	css,
	js,
	git,
	express,
	mongo,
} from "../../constants/words";
import { techsText } from "../../constants/texts";

function Techs() {
	return (
		<section className='techs' id='techs'>
			<h2 className='techs__title'>{techs}</h2>
			<h3 className='techs__text-title'>{techsHeader}</h3>
			<p className='techs__text'>{techsText}</p>
			<ul className='techs__nav'>
				<li className='icon icon_place_techs'>
					<p>{html}</p>
				</li>
				<li className='icon icon_place_techs'>
					<p>{css}</p>
				</li>
				<li className='icon icon_place_techs'>
					<p>{js}</p>
				</li>
				<li className='icon icon_place_techs'>
					<p>{myReact}</p>
				</li>
				<li className='icon icon_place_techs'>
					<p>{git}</p>
				</li>
				<li className='icon icon_place_techs'>
					<p>{express}</p>
				</li>
				<li className='icon icon_place_techs'>
					<p>{mongo}</p>
				</li>
			</ul>
		</section>
	);
}

export default Techs;
