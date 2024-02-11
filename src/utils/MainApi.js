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



  // getInfoCards() {
  //   return this._sendRequest(`${this._mainUrl}cards`, {
  //     headers: {
  //       authorization: localStorage.getItem('token'),
  //       "Content-Type": "application/json",
  //     }
  //   })
  // }

  // setNewCard(link, name) {
  //   return this._sendRequest(`${this._mainUrl}cards`, {
  //     method: "POST",
  //     headers: {
  //       authorization: localStorage.getItem('token'),
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: `${name}`,
  //       link: `${link}`,
  //     })
  //   })
  // }


  // deleteResponse(id) {
  //   return this._sendRequest(`${this._mainUrl}cards/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       authorization: localStorage.getItem('token'),
  //     }
  //   })
  // }

  // deleteResponseLike(id) {
  //   return this._sendRequest(`${this._mainUrl}cards/${id}/likes`, {
  //     method: "DELETE",
  //     headers: {
  //       authorization: localStorage.getItem('token'),
  //       "Content-Type": "application/json",
  //     },
  //   })
  // }

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
