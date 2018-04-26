import React, { Component } from 'react';
import Adapter from '../Adapter';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logIn, logOut } from '../actions';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    password_confirmation: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup = (e) => {
    e.preventDefault();
    Adapter.createUser(this.state)
      .then(res => res.json())
      .then(user => {
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
            <form onSubmit={this.handleSignup}>
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

              <label>Confirm password</label>
              <input
                type='password'
                name='password_confirmation'
                onChange={this.handleInputChange}
                value={this.state.password_confirmation}
              />
              <br />
              {
                (this.state.password !== this.state.password_confirmation && this.state.password_confirmation.length > 0)
                ? <p>Passwords Must Match</p> : null
              }
              <button type='submit'>Sign Up</button>
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
