import React, { Component } from 'react';
import Adapter from '../Adapter';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logIn, logOut } from '../actions';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    Adapter.login({
      username: this.state.username,
      password: this.state.password
    }).then(user => {
      if (!user.error) {
        this.props.logIn(user)
        localStorage.setItem('jwt', user.jwt)
        this.props.history.push('/home')
      }
    })
  }

  render() {
    return (
      <div>
        {!this.props.auth.isLoggedIn ?
          <div>
            <form onSubmit={this.handleLoginSubmit}>
              <label>Username</label>
              <input
                type='text'
                name='username'
                onChange={this.handleInputChange}
                value={this.state.username}
              />

              <label>Password</label>
              <input
                type='password'
                name='password'
                onChange={this.handleInputChange}
                value={this.state.password}
              />

              <button type='submit'>Login</button>
            </form>
            <p>No account? <Link to='/signup'>Sign Up</Link></p>
          </div>
        :
          null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: {
      isLoggedIn: state.auth.isLoggedIn,
      user: state.auth.user
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logIn: logIn,
    logOut: logOut
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
