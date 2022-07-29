import * as moviesActions from './moviesActions';

import {combineReducers} from 'redux';

export default combineReducers({
  movies: moviesActions,
});
