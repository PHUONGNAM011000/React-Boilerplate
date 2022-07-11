import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the formTest state domain
 */

const selectFormTestDomain = (state) => state.formTest || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FormTest
 */

const makeSelectFormTest = () =>
  createSelector(
    selectFormTestDomain,
    (substate) => substate.value
  );

const makeListSelectFormTest = () =>
  createSelector(
    selectFormTestDomain,
    (substate) => substate.list
  );

const makeDataSelectFormTest = () =>
  createSelector(
    selectFormTestDomain,
    (substate) => substate.data
  );

export {
  selectFormTestDomain,
  makeSelectFormTest,
  makeListSelectFormTest,
  makeDataSelectFormTest,
};
