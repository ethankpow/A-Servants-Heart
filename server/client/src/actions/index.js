import axios from 'axios'
import {LOGIN_USER, FETCH_PROJECTS, CREATE_PROJECT, FETCH_ORGANIZATIONS, FETCH_ORGPROJECT, CREATE_USER, FETCH_USERPROJECTS} from './types'

export const loginUser = async (loginObject) => {
    const res = await axios({url: '/api/login', method: 'post', data: loginObject});
    return{ type: LOGIN_USER, payload: res.data };
  };

export const fetchProjects = async () => {
  const res = await axios({url: '/api/projects', method: 'get'})
  return{ type: FETCH_PROJECTS, payload: res.data }
}

export const createProject = async (newProject) => {
  const res = await axios({url: '/api/projects', method: 'post', data: newProject})
  return { type: CREATE_PROJECT, payload: res.data}
}
export const fetchOrganizations = async () => {
  const res = await axios({url: '/api/organizations', method: 'get'})
  return { type: FETCH_ORGANIZATIONS, payload: res.data}
}
export const fetchOrgById = async () => {
  const res = await axios({ url:'/api/'})
}
export const fetchProjectsByOrgId = async (id) => {
  const res = await axios({url:`/api/projects/${id}`, method: 'get'})
  console.log(res)
  return { type: FETCH_ORGPROJECT, payload: res.data}
}
export const createUser = async (newUser) => {
  const res = await axios({url:'/api/users', method: 'post', data: newUser})
  return { type: CREATE_USER, payload: res.data}
}

export const sessionLogin = async () => {
  const res = await axios({url: '/api/currentuser', method: 'get'})
  return { type: LOGIN_USER, payload: res.data}
}

export const userProjects = async () => {
  const res = await axios({url: '/api/user/projects', method: 'get'})
  return { type: FETCH_USERPROJECTS, payload: res.data}
}