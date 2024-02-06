
class Api {
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

  getFilms() {
    return this._sendRequest(`${this._mainUrl}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }



}

const movieApi = new Api('https://api.nomoreparties.co/beatfilm-movies');


export default movieApi;
