import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import fetchProjects from './projectReducer';
import fetchOrganizations from './orgReducer'

export default combineReducers({
  login: loginReducer,
  projects: fetchProjects,
  orgs: fetchOrganizations
});