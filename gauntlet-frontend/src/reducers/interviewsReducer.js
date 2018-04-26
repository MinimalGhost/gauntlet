export default (state = {
  interviews: []
}, action) => {
  switch (action.type) {
    case 'GET_INTERVIEWS':
      return { ...state, interviews: action.interviews}
    default:
      return state
  }
}
