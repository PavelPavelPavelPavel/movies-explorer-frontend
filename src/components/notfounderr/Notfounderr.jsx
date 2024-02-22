import { useNavigate } from "react-router-dom";
import { back, notFound, notFoundCode } from "../../constants/words";
function Notfounderr() {
	const navigate = useNavigate();

	function goBack() {
		navigate(-1);
	}

	return (
		<section className='notfounderr'>
			<h1 className='notfounderr__code'>{notFoundCode}</h1>
			<p className='notfounderr__text'>{notFound}</p>
			<button className='notfounderr__btn' onClick={goBack}>
				{back}
			</button>
		</section>
	);
}

export default Notfounderr;
