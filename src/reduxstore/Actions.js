import { ADDITION, SUBSTRACTION } from "./ActionTypes";

export const addition = ({ counterNumber }) => {
  return {
    type: ADDITION,
    counterNumber: counterNumber,
  };
};

export const substraction = ({ counterNumber }) => {
  return {
    type: SUBSTRACTION,
    counterNumber: counterNumber,
  };
};
