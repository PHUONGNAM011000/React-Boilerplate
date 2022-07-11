import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testForm state domain
 */

const selectTestFormDomain = (state) => state.testForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TestForm
 */

const makeSelectTestForm = () =>
  createSelector(
    selectTestFormDomain,
    (substate) => substate
  );

const makeSelectValue = () =>
  createSelector(
    selectTestFormDomain,
    (substate) => substate.value
  );

const makeSelectDataTest = () =>
  createSelector(
    selectTestFormDomain,
    (substate) => substate.data
  );

export default makeSelectTestForm;
export { selectTestFormDomain, makeSelectDataTest, makeSelectValue };
