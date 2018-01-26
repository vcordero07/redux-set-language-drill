import {SET_LANGUAGE} from '../actions';

// Add your code for the languageReducer
export const languageReducer = (state='sp', action) => {
  if (action.type === SET_LANGUAGE) {
    return action.language
  }
  else {
    return state;
  }
};
