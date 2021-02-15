import {AxiosError} from 'axios';
import {BaseAction} from '../actions';
import {fetchConstraints as fetchConstraintsApi} from '../api';
import {actionsEnum} from './actionsEnum';
interface Constraints {
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
export interface ConstraintsAction extends BaseAction {
  payload: {
    config: Constraints;
  };
}

export const constraintsAction = () => {
  return (dispatch: any) => {
    dispatch(constraintsActionRequest());

    return fetchConstraintsApi()
      .then(config => {
        dispatch(constraintsActionCompleted(config));
      })
      .catch(error => {
        dispatch(constraintsActionFailed(error));
      });
  };
};

const constraintsActionRequest = () => ({
  type: actionsEnum.FETCH_CONSTRAINTS_REQUEST,
});

const constraintsActionCompleted = (config: any): ConstraintsAction => ({
  type: actionsEnum.FETCH_CONSTRAINTS_SUCCESS,
  payload: config,
});

const constraintsActionFailed = (error: AxiosError) => ({
  type: actionsEnum.FETCH_CONSTRAINTS_FAILURE,
  errorMessage: error,
});
