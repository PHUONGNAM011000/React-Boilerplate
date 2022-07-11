/*
 *
 * TestForm actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_API_TEST,
  CALL_API_SUCCESS,
  CALL_API_ERROR,
  REMOVE_ITEM,
  SUBMIT_FORM,
  VALUE_CHANGED,
} from './constants';

export function loadApiTest() {
  return {
    type: LOAD_API_TEST,
  };
}

export function callApiSuccess(data) {
  return {
    type: CALL_API_SUCCESS,
    data,
  };
}

export function callApiError(error) {
  return {
    type: CALL_API_ERROR,
    error,
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id,
  };
}

export function valueChangeHandler(value) {
  return {
    type: VALUE_CHANGED,
    value,
  };
}

export function submitHandler(value) {
  return {
    type: SUBMIT_FORM,
    value,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
