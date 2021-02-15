import {combineReducers} from 'redux';
import {constraintsReducer, constraintsState} from './constraintsReducer';
import {offerReducer, offerState} from './offerReducer';

export interface State {
  constraintsReducer: constraintsState;
  offerReducer: offerState;
}

const reducer = combineReducers({
  constraintsReducer,
  offerReducer,
});

export default reducer;
