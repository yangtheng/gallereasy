import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { favouritesReducer } from './reducers/favouritesReducer';
import { searchReducer } from './reducers/searchReducer';

const reducers = combineReducers({
  searchResults: searchReducer,
  favourites: favouritesReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favourites']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
