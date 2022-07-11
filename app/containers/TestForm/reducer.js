/*
 *
 * TestForm reducer
 *
 */
import produce from 'immer';
import {
  CALL_API_SUCCESS,
  DEFAULT_ACTION,
  REMOVE_ITEM,
  SUBMIT_FORM,
  VALUE_CHANGED,
} from './constants';
import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  data: [],
  value: '',
};

/* eslint-disable default-case, no-param-reassign */
const testFormReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CALL_API_SUCCESS:
        draft.data = [...action.data];
        break;

      case REMOVE_ITEM:
        draft.data = [...draft.data.filter((item) => item.id !== action.id)];
        break;

      case VALUE_CHANGED:
        draft.value = action.value;
        break;

      case SUBMIT_FORM:
        if (draft.value !== '') {
          draft.data = [
            ...draft.data,
            {
              id: uuidv4(),
              title: draft.value,
            },
          ];
        }
        draft.value = '';
        break;

      case DEFAULT_ACTION:
        break;
    }
  });

export default testFormReducer;
