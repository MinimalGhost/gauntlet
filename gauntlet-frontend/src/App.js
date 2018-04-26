import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logIn, logOut } from './actions';
import Adapter from './Adapter';
import './App.css';

// Components
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import InterviewForm from './components/InterviewForm';


class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      Adapter.current_user()
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
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/new_interview' component={InterviewForm} />
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
