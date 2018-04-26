import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Adapter from '../Adapter'

class InterviewForm extends Component {
  state = {
    name: '',
    contact: '',
    format: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleInterviewSubmit = (e) => {
    e.preventDefault();
    Adapter.createInterview(this.state)
      .then(res => res.json())
      .then(interview => {
        if (!interview.error) {
          this.props.history.push('/home')
        }
      })
  }

  render() {
    return (
      <div>
        {!this.props.auth.isLoggedIn ?
          <Redirect to='/login' />
        :
          <div>
            <form onSubmit={this.handleCompanySubmit}>
              <label>Company</label>
              <input
                type='text'
                name='name'
                onChange={this.handleInputChange}
                value={this.state.name}
              />

              <label>Contact</label>
              <input
                type='text'
                name='contact'
                onChange={this.handleInputChange}
                value={this.state.contact}
              />

              <label>Format</label>
              <input
                type='text'
                name='format'
                onChange={this.handleInputChange}
                value={this.state.format}
              />

              <button type='submit'>Submit</button>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(InterviewForm)
