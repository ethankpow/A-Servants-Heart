import { LOGIN_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action)
      console.log('in reducer', action.payload)
      return action.payload || false;
    default:
      return state;
  }
}