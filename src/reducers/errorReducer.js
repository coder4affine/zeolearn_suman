const initialState = {};

export default (state = initialState, { type, payload }) => {
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);
  if (!matches) {
    return state;
  }

  const [, RequestName, RequestState] = matches;

  if (RequestState === 'FAILURE') {
    return { ...state, [RequestName]: payload };
  }

  const { [RequestName]: data, ...rest } = state;

  return rest;
};
