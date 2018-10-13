import { FETCH_PROJECTS, CREATE_PROJECT, FETCH_ORGPROJECT } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      console.log('in reducer', action.payload)
      return action.payload || false;
    case CREATE_PROJECT:
      console.log('Creating', action.payload)
      return state;
    case FETCH_ORGPROJECT:
      return action.payload || false;
    default:
      return state;
  }
}