// Dependencies
import { combineReducers } from 'redux';

// Reducers
import popular from '../App/Popular/reducer';
import users from '../App/Users/reducer';
import repos from '../App/Repos/reducer';

const appReducer = combineReducers({
  popular,
  users,
  repos,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;