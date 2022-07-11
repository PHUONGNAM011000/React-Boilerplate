/*
 *
 * FormTest actions
 *
 */

import {
  INPUT_CHANGE,
  SUBMIT_FORM,
  REMOVE_ITEM_LIST,
  API_CALL_SUCCESS,
  CALL_API_LOAD,
  API_CALL_FAILURE,
} from './constants';

export function valueChanged(value) {
  return {
    type: INPUT_CHANGE,
    value,
  };
}

export function onSubmit() {
  return {
    type: SUBMIT_FORM,
  };
}

export function onRemove(item) {
  return {
    type: REMOVE_ITEM_LIST,
    item,
  };
}

export function loadings() {
  return {
    type: CALL_API_LOAD,
  };
}

export function callApiSuccess(data) {
  return {
    type: API_CALL_SUCCESS,
    data,
  };
}

export function callApiError(error) {
  return {
    type: API_CALL_FAILURE,
    error,
  };
}
