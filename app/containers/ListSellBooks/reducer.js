/*
 *
 * ListSellBooks reducer
 *
 */
import produce from 'immer';
import { CALL_API_SUCCESS, REMOVE_ITEM_BOOK } from './constants';

export const initialState = {
  dataBooks: [],
};

/* eslint-disable default-case, no-param-reassign */
const listSellBooksReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CALL_API_SUCCESS: {
        const editData = action.data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            image: `https://picsum.photos/id/${item.id}/200/300`,
            desc: item.body,
            price: `${Math.floor(Math.random() * 10)}0.000`,
          };
        });
        draft.dataBooks = [...editData];
        break;
      }

      case REMOVE_ITEM_BOOK:
        const dataBooksFilter = [...draft.dataBooks].filter(
          (item) => item.id !== action.id
        );

        draft.dataBooks = dataBooksFilter.map((item, index) => {
          return {
            ...item,
            id: index + 1,
          };
        });

        break;
    }
  });

export default listSellBooksReducer;
