import { FETCH_ORGANIZATIONS } from '../actions/types';


export default function(state = [], action) {
    switch (action.type) {
      case FETCH_ORGANIZATIONS:
        console.log('in org reducer', action.payload)
        return action.payload || false;
      default:
        return state;
    }
  }