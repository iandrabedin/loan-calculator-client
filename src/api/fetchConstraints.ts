import axios, {AxiosError, AxiosResponse} from 'axios';
import {serviceURL, getErrorMessage} from './apiUtils';

const projectURL = `${serviceURL}/application/constraints`;

interface Constraints {
  interest: number;
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

export const fetchConstraints = () => {
  return axios.get(projectURL).then(resolve).catch(handleError);
};

const resolve = (response: AxiosResponse): Constraints => {
  return response.data ? response.data : {};
};

const handleError = (error: AxiosError) => {
  if (axios.isCancel(error)) {
    return undefined;
  } else {
    throw new Error(`Could not fetch constraints: ${getErrorMessage(error)}`);
  }
};
