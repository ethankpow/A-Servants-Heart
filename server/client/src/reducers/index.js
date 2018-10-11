import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import fetchProjects from './projectReducer'

export default combineReducers({
  login: loginReducer,
  projects: fetchProjects
});