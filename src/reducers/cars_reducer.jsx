import { DELETE_CAR, LIST_CARS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case LIST_CARS: {
      return action.payload;
    }
    case DELETE_CAR: {
      return state.filter(car => car !== action.payload);
    }
    default:
      return state;
  }
}
