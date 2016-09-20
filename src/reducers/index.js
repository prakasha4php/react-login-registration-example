import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';
import fuelSavings from './fuelSavingsReducer';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  fuelSavings
});

export default rootReducer;
