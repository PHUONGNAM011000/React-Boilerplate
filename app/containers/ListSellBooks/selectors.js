import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listSellBooks state domain
 */

const selectListSellBooksDomain = (state) =>
  state.listSellBooks || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListSellBooks
 */

const makeSelectListSellBooks = () =>
  createSelector(
    selectListSellBooksDomain,
    (substate) => substate
  );

const makeSelectListBooks = () =>
  createSelector(
    selectListSellBooksDomain,
    (substate) => substate.dataBooks
  );

export {
  selectListSellBooksDomain,
  makeSelectListBooks,
  makeSelectListSellBooks,
};
