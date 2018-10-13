import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import fetchProjects from './projectReducer';
import fetchOrganizations from './orgReducer';
import fetchOrgProject from './projectReducer'

export default combineReducers({
  login: loginReducer,
  projects: fetchProjects,
  orgs: fetchOrganizations,
  orgProject: fetchOrgProject
});