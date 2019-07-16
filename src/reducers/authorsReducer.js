import * as types from '../constants/actionTypes';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

// LOAD_AUTHORS_SUCCESS

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${types.LOAD_AUTHORS}_${types.REQUEST}`:
      return { ...state, loading: true };

    case `${types.LOAD_AUTHORS}_${types.SUCCESS}`:
      return { ...state, loading: false, data: payload };

    case `${types.LOAD_AUTHORS}_${types.FAILURE}`:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
