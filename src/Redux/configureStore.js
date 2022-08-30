import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({ 
  rockets: rocketsReducer,
  // add missions reducer here
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
