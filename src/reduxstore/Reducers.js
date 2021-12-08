import { ADDITION, SUBSTRACTION } from "./ActionTypes";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return { ...state, counter: state.counter + action.counterNumber };
    case SUBSTRACTION:
      return { ...state, counter: state.counter - action.counterNumber };
    default:
      return state;
  }
};
