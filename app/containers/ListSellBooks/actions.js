/*
 *
 * ListSellBooks actions
 *
 */

import {
  LOAD_API,
  CALL_API_SUCCESS,
  CALL_API_ERROR,
  REMOVE_ITEM_BOOK,
} from './constants';

export const loadingApi = () => {
  return {
    type: LOAD_API,
  };
};

export const callApiSuccess = (data) => {
  return {
    type: CALL_API_SUCCESS,
    data,
  };
};

export const callApiError = (err) => {
  return {
    type: CALL_API_ERROR,
    err,
  };
};

export const removeItemBook = (id) => {
  return {
    type: REMOVE_ITEM_BOOK,
    id,
  };
};
