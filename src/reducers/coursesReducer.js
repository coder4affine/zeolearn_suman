import * as types from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${types.LOAD_COURSES}_${types.SUCCESS}`:
      return payload;

    case `${types.ADD_COURSE}_${types.SUCCESS}`:
      return [...state, payload];

    case `${types.DELETE_COURSE}_${types.SUCCESS}`:
      return state.filter(x => x.id !== payload.id);

    case `${types.EDIT_COURSE}_${types.SUCCESS}`: {
      const index = state.data.findIndex(x => x.id === payload.id);
      return [...state.slice(0, index), payload, ...state.slice(index + 1)];
    }

    default:
      return state;
  }
};
