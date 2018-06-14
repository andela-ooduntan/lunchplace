import * as actionTypes from '../actions/actionType.js';

const initialState = {
  places: [],
  loadingPlaces: false,
  placesError: false
};

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GETTING_PLACES:
      return Object.assign({}, state, action.payload);
    case actionTypes.GETTING_PLACES_SUCCESSFUL:
      return Object.assign({}, state, action.payload);
    case actionTypes.GETTING_PLACES_FAILED:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
