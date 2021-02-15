import {actionsEnum} from '../actions/actionsEnum';
import {BaseAction} from '../actions';

export interface offerState {
  principalAmount: number;
  interestAmount: number;
  totalAmount: number;
  dueDate: string;
}

const initialState = {
  principalAmount: null,
  interestAmount: null,
  totalAmount: null,
  dueDate: '',
};

export const offerReducer = (
  state: offerState = initialState,
  action: BaseAction,
) => {
  switch (action.type) {
    case actionsEnum.FETCH_OFFER_REQUEST:
      return {...state};
    case actionsEnum.FETCH_OFFER_FAILURE:
      return {...state};
    case actionsEnum.FETCH_OFFER_SUCCESS:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
