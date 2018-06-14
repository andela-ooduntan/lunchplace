import * as actionTypes from './actionType.js';
import {apiRequest} from '../networkBroker';
import apiUrl from '../constants/apiUrl'

export function getPlaceFailed() {
  return {
    type: actionTypes.GETTING_PLACES_FAILED,
    data: {
      loadingPlaces: false,
      placesError: true
    }
  };
}

export function gettingPlaces() {
  return {
    type: actionTypes.GETTING_PLACES,
    payload: {
      loadingPlaces: true,
    }
  };
}

export function getPlaceSuccessful(places) {
  return {
    type: actionTypes.GETTING_PLACES_SUCCESSFUL,
    payload: {
      places,
      loadingPlaces: false
    }
  };
}

export function getPlaces(address) {
  return (dispatch) => {
    dispatch(gettingPlaces());
    return apiRequest(null, 'get', apiUrl.getLunchLocation(address))
      .then((apiResult) => {
        return dispatch(getPlaceSuccessful(apiResult.data.response));
      })
      .catch(() => {
        return dispatch(getPlaceFailed());
      });
  };
}
