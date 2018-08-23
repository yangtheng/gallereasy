import { createStore, combineReducers } from 'redux';
import { favouritesReducer } from './reducers/favouritesReducer';
import { searchReducer } from './reducers/searchReducer';

export default createStore(combineReducers({
  searchResults: searchReducer,
  favourites: favouritesReducer
}))
