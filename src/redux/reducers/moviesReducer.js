import * as types from '../actions/actionTypes';

const initialState = {
  movies: [],
  moviesDetail: {},
  errors: {},
  isLoading: false,
};

export default function moviesReducer(state = initialState, action = {}) {
  // console.log(action.payload);
  switch (action.type) {
    case types.API_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.API_REQ_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.results
      };
    case types.API_REQ_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    //DETAIL
    case types.API_REQ_DETAIL:
      return {
        ...state,
        isLoading: true,
      };
    case types.API_REQ_DETAIL_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        moviesDetail: action.payload,
      };
    case types.API_REQ_DETAIL_FAILED:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
}
