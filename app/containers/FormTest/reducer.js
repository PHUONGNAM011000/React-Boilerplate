/*
 *
 * FormTest reducer
 *
 */
import produce from 'immer';
import {
  INPUT_CHANGE,
  SUBMIT_FORM,
  REMOVE_ITEM_LIST,
  API_CALL_SUCCESS,
} from './constants';

export const initialState = {
  value: '',
  list: [],
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const formTestReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case INPUT_CHANGE:
        draft.value = action.value;
        break;
      case SUBMIT_FORM: {
        if (draft.value !== '') {
          draft.list = draft.list.concat(draft.value);
          draft.value = '';
        }
        break;
      }
      case REMOVE_ITEM_LIST: {
        draft.list = draft.list.filter((item) => item !== action.item);
        break;
      }
      case API_CALL_SUCCESS: {
        draft.data = [...action.data];
        break;
      }
    }
  });

export default formTestReducer;
