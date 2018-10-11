import axios from 'axios'
import {LOGIN_USER, FETCH_PROJECTS } from './types'

export const loginUser = async (loginObject) => {
    const res = await axios({url: '/api/login', method: 'post', data: loginObject});
    return{ type: LOGIN_USER, payload: res.data };
  };

export const fetchProjects = async () => {
  debugger
  const res = await axios({url: '/api/projects', method: 'get'})
  console.log(res)
  return{ type: FETCH_PROJECTS, payload: res.data }
}