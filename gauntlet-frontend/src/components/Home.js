import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div>
        { !this.props.auth.isLoggedIn ?
          <Redirect to='/login' />
          :
          <div>
            <p>Welcome, {this.props.auth.user.username}</p>
          </div>
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
    // actionToDispatch : actionToDispatch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
