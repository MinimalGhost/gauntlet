import React from 'react'
import InterviewItem from './InterviewItem'
import { connect } from 'react-redux'

const InterviewList = (props) => {
    let interviews = props.interviews.map(interview => <InterviewItem key={interview.id} selectInterview={props.selectInterview} {...interview} />)

    return (
      <div>
        {interviews.length > 0 ?
          <h4>Here are available interviews to continue</h4>
        :
          <h4>There are currently no interviews available</h4>
        }
        {interviews}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
   interviews: state.interviewsReducer.interviews
  }
}

export default connect(mapStateToProps)(InterviewList)
