import { FETCH_PROJECTS, CREATE_PROJECT, FETCH_ORGPROJECT } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload || false;
    case CREATE_PROJECT:
      return state;
    case FETCH_ORGPROJECT:
      console.log('org project reducer', action.payload)
      return action.payload || false;
    default:
      return state;
  }
}