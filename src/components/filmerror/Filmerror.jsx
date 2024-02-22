import { useEffect, useState } from "react";
import { searchResultError } from "../../constants/errorText/searchError";

function FilmError({ moviesPresence }) {
	const [text, setText] = useState("");

	useEffect(() => {
		if (!moviesPresence) {
			setText(searchResultError);
		}
	}, [moviesPresence]);

	return (
		<section className='filmerror'>
			<h1 className='filmerror__text'>{text}</h1>
		</section>
	);
}

export default FilmError;
