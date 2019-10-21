// Dependencies
import { combineReducers } from 'redux';

// Reducers
import popular from '../App/Popular/reducer';

const appReducer = combineReducers({
  popular
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;