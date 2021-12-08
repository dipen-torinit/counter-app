import createDataContext from "./createDataContext";

const counterContextReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.counterNumber;
    case "subtract":
      return state - action.counterNumber;
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

export const { Context, Provider } = createDataContext(
  counterContextReducer,
  { increaseCounter: increaseCounter, decreaseCounter: decreaseCounter },
  0
);
