import { BUY_CAKE, RETURN_CAKE } from "./CakeType";

export const buyCakeIncreaseAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: BUY_CAKE });
  } catch (err) {}
};

// ReturnCakeAction
export const ReturnCakeAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RETURN_CAKE });
  } catch (err) {}
};
