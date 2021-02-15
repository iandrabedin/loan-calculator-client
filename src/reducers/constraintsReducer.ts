import {actionsEnum} from '../actions/actionsEnum';
import {BaseAction} from '../actions';

export interface constraintsState {
  interest: number;
  dateFormat: string;
  intervals: {
    amountInterval: {
      min: number;
      max: number;
      defaultValue: number;
      step: number;
    };
    termInterval: {
      min: number;
      max: number;
      defaultValue: number;
      step: number;
    };
  };
}

const initialState = {
  interest: null,
  dateFormat: '',
  intervals: {
    amountInterval: {
      min: null,
      max: null,
      defaultValue: null,
      step: null,
    },
    termInterval: {
      min: null,
      max: null,
      defaultValue: null,
      step: null,
    },
  },
};

export const constraintsReducer = (
  state: constraintsState = initialState,
  action: BaseAction,
) => {
  switch (action.type) {
    case actionsEnum.FETCH_CONSTRAINTS_REQUEST:
      return {...state};
    case actionsEnum.FETCH_CONSTRAINTS_FAILURE:
      return {...state};
    case actionsEnum.FETCH_CONSTRAINTS_SUCCESS:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
