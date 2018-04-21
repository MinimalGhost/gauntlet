export default (state = {
  isLoggedIn: false,
  user: null
}, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return { ...state, isLoggedIn: true, user: action.user }
    case 'LOG_OUT':
      return { ...state, isLoggedIn: false, user: {} }
    default:
      return state
  }
}
