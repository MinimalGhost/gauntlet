import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { InterviewList } from './InterviewList';
// import { addInterview } from '../actions';
// import Adapter from '../Adapter';

class Home extends Component {

  // selectInterview = (e, interview) => {
  //   console.log(interview.id);
  //   Adapter.addInterview(company.id)
  //   .then(this.props.addInterview)
  // }

  render() {
    return (
      <div>
        { !this.props.auth.isLoggedIn ?
          <Redirect to='/login' />
          :
          <div>
            <p>Welcome, {this.props.auth.user.username}</p>
            <Link to='/new_interview'>Add a new Interview</Link>
            <p>or select an existing interview process to continue</p>
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
    },
    interviewsReducer: {
      interviews: state.interviewsReducer.interviews
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // addInterview: addInterview
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
