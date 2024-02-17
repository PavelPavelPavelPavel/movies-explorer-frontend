// require('dotenv').config();

class Auth {
	constructor(mainUrl) {
		this._mainUrl = mainUrl;
	}


	_sendRequest(url, options) {
		return fetch(url, options).then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error("Что-то пошло не так...");
		});
	}

	authentication(name, email, password) {
		return this._sendRequest(`${this._mainUrl}signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, password }),
		});
	}

	authorization(email, password) {
		return this._sendRequest(`${this._mainUrl}signin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
	}

}


const auth = new Auth(process.env.REACT_APP_API_URL);

export default auth;
