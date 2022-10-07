import { BUY_CAKE, RETURN_CAKE } from "./CakeType";

const initialState = {
  numOfCakes: 10,
};

export const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: (state.numOfCakes += 1),
      };
    case RETURN_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
