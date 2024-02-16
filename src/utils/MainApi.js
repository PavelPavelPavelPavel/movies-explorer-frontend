// require('dotenv').config();

class Api {
  constructor(mainUrl) {
    this._mainUrl = mainUrl;
  }

  _sendRequest(url, options) {
    return fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Упс at MainApi');
      })
  }

  getInfo() {
    return this._sendRequest(`${this._mainUrl}users/me`, {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("jwt"),
      }
    });
  }

  updateInfo(name, email) {
    return this._sendRequest(`${this._mainUrl}users/me`, {
      method: "PATCH",
      headers: {
        authorization: localStorage.getItem('jwt'),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      })
    })
  }


  getSavedFilms() {
    return this._sendRequest(`${this._mainUrl}movies`, {
      headers: {
        authorization: localStorage.getItem('jwt'),
        "Content-Type": "application/json",
      }
    })
  }

  deleteFilm(id) {
    return this._sendRequest(`${this._mainUrl}movies/${id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem('jwt'),
      }
    })
  }

  addToFavorite({ country, director, duration, year, description,
    image, trailerLink, nameEN, nameRU, thumbnail, owner, movieId }) {
    return this._sendRequest(`${this._mainUrl}movies`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem('jwt'),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        owner,
        movieId,
      })
    })
  }


  // addLikeToCard(id) {
  //   return this._sendRequest(`${this._mainUrl}cards/${id}/likes`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: localStorage.getItem('token'),
  //       "Content-Type": "application/json",
  //     },
  //   })
  // }
}

const mainApi = new Api('http://localhost:3000/');


export default mainApi;
