import React from 'react'

const InterviewItem = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={e => props.selectInterview(e, props)}>Select</button>
    </div>
  )
}

export default InterviewItem
