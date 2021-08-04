//Combinación de todos los reducers
import { combineReducers } from 'redux';
import { searchReducer } from './searchReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  cart: cartReducer,
  //Demás reducers...
});
