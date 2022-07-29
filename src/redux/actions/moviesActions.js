import Config from 'react-native-config';
import {Client} from '../../utils/https';
import * as types from './actionTypes';

export const fethMovies = () => {
  var populer = `popular?api_key=${Config.API_KEY_V3}&language=en-US&page=1`;
  return dispatch => {
    dispatch(apiRequest({}));
    return Client.get(populer)
      .then(response => {
        dispatch(apiRequestSucceeded(response.data));
      })
      .catch(error => {
        dispatch(apiRequestSucceeded(error));
      });
  };
};
export const fethMoviesDetails = movie_id => {
  var details_id = `${movie_id}?api_key=${Config.API_KEY_V3}`;
  return dispatch => {
    dispatch(apiRequestDetail({}));
    return Client.get(details_id)
      .then(response => {
        dispatch(apiRequestDetailSucceeded(response.data));
      })
      .catch(error => {
        dispatch(apiRequestDetailSucceeded(error));
      });
  };
};

export function apiRequest(payload) {
  return {
    type: types.API_REQ,
    payload: payload,
  };
}

export function apiRequestSucceeded(payload) {
  return {
    type: types.API_REQ_SUCCEEDED,
    payload: payload,
  };
}

export function apiRequestFailed(payload) {
  return {
    type: types.API_REQ_FAILED,
    payload: payload,
  };
}
//==========DETAIL==========
export function apiRequestDetail(payload) {
  return {
    type: types.API_REQ_DETAIL,
    payload: payload,
  };
}

export function apiRequestDetailSucceeded(payload) {
  return {
    type: types.API_REQ_DETAIL_SUCCEEDED,
    payload: payload,
  };
}

export function apiRequestDetailFailed(payload) {
  return {
    type: types.API_REQ_DETAIL_FAILED,
    payload: payload,
  };
}
