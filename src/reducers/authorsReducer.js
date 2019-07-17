import * as types from '../constants/actionTypes';

const initialState = [];

// LOAD_AUTHORS_SUCCESS

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${types.LOAD_AUTHORS}_${types.SUCCESS}`:
      return payload;

    default:
      return state;
  }
};
