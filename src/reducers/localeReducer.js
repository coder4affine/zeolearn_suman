const initialState = {
  locale: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_LOCALE':
      return { ...state, ...payload };

    default:
      return state;
  }
};
