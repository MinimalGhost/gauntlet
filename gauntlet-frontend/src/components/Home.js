import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div>
        <p>Welcome, {this.props.auth.user.username}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: {
      isLoggedIn: state.auth.isLoggedIn, ...state.auth.user
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // actionToDispatch: actionToDispatch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
