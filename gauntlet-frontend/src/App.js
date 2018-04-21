import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logIn, logOut } from './actions';
import AuthAdapter from './AuthAdapter';

// Components
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

import './App.css';

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      AuthAdapter.current_user()
      .then(user => {
        if (!user.error) {
          this.props.logIn(user)
        }
      })
    }
  }

  logout = () => {
    localStorage.removeItem('jwt')
    this.props.logOut()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">
        {this.props.auth.isLoggedIn ?
          <header>
            <button onClick={this.logout}>Log Out</button>
          </header>
          : null }
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Login} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    );
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
