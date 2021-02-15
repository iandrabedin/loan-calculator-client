import axios from 'axios';
import {serviceURL, getErrorMessage} from './apiUtils';

const projectURL = `${serviceURL}/application/offer`;

export const createOffer = offer => {
  return axios
    .get(projectURL, {params: offer})
    .then(resolve)
    .catch(handleError);
};

const resolve = response => {
  return response.data ? response.data : {};
};

const handleError = error => {
  if (axios.isCancel(error)) {
    return undefined;
  } else {
    throw new Error(`Could not create offer: ${getErrorMessage(error)}`);
  }
};
