import { combineReducers } from 'redux';
import auth from './auth';
import interviewsReducer from './interviewsReducer';

export default combineReducers({
  auth,
  interviewsReducer
})
