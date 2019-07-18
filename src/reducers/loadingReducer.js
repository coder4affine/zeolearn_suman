const initialState = {};

export default (state = initialState, { type }) => {
  const matches = /(.*)_(SUCCESS|REQUEST|FAILURE)/.exec(type);
  if (!matches) {
    return state;
  }

  const [, RequestName, RequestState] = matches;

  if (RequestState === 'REQUEST') {
    return { ...state, [RequestName]: true };
  }

  const { [RequestName]: data, ...rest } = state;

  return rest;
};
