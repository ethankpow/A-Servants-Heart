import {CREATE_USER} from '../actions/types'

export default function(state = [], action) {
    switch (action.type) {
      case CREATE_USER:
        console.log('User Reducer', action.payload)
        return action.payload || false;
      default:
        return state;
    }
  }