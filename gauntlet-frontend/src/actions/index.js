
export function logIn(user) {
  return { type: 'LOG_IN', ...user }
}

export function logOut() {
  return { type: 'LOG_OUT' }
}

export function getInterviews(interviews) {
  return { type: 'GET_INTERVIEWS', interviews: interviews }
}
