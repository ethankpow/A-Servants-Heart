import { FETCH_PROJECTS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      console.log(action)
      console.log('in reducer', action.payload)
      return action.payload || false;
    default:
      return state;
  }
}