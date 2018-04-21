const baseUrl = 'http://localhost:3000/api'

class AuthAdapter {

  static createUser(user) {
    return fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(user)
    })
  }

  static login(loginParams) {
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static current_user() {
    return fetch(`${baseUrl}/current_user`, {
      headers: headers()
    }).then(res => res.json())
  }

}

function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}

function authHeaders() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}



export default AuthAdapter
