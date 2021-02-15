import {AxiosError} from 'axios';
import {BaseAction} from '../actions';
import {createOffer as createOfferApi} from '../api';
import {actionsEnum} from './actionsEnum';

interface Offer {
  principalAmount: number;
  interestAmount: number;
  totalAmount: number;
  dueDate: string;
}

export interface OfferAction extends BaseAction {
  payload: {
    offer: Offer;
  };
}

export const offerAction = (amount: number, term: number) => {
  return (dispatch: any) => {
    dispatch(offerActionRequest());

    return createOfferApi({amount, term})
      .then(offer => {
        dispatch(offerActionCompleted(offer));
      })
      .catch(error => {
        dispatch(offerActionFailed(error));
      });
  };
};

const offerActionRequest = () => ({
  type: actionsEnum.FETCH_OFFER_REQUEST,
});

const offerActionCompleted = (offer: any): OfferAction => ({
  type: actionsEnum.FETCH_OFFER_SUCCESS,
  payload: offer,
});

const offerActionFailed = (error: AxiosError) => ({
  type: actionsEnum.FETCH_OFFER_FAILURE,
  errorMessage: error,
});
