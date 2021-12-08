import createDataContext from "./createDataContext";

const counterContextReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, counter: state.counter + action.counterNumber };
    case "subtract":
      return { ...state, counter: state.counter - action.counterNumber };
    default:
      return state;
  }
};

const increaseCounter = (dispatch) => {
  return ({ counterNumber }) => {
    dispatch({ type: "add", counterNumber: counterNumber });
  };
};

const decreaseCounter = (dispatch) => {
  return ({ counterNumber }) => {
    dispatch({ type: "subtract", counterNumber: counterNumber });
  };
};

const initialState = { counter: 0 };

export const { Context, Provider } = createDataContext(
  counterContextReducer,
  { increaseCounter: increaseCounter, decreaseCounter: decreaseCounter },
  initialState
);
