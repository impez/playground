import { combineReducers } from "redux";

export const goalReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_GOAL":
      return action.payload;

    default:
      return state;
  }
};

export const singularSlidersReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_SINGULAR_SLIDER":
      const cloneState = { ...state };
      const { leftComp, rightComp, value } = action.payload;
      const pair = `${leftComp}:${rightComp}`;

      cloneState[pair] = value;
      return cloneState;

    default:
      return state;
  }
};

export const multiSlidersReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_MULTI_SLIDER":
      const cloneState = { ...state };
      const { leftComp, rightComp, value } = action.payload;
      const pair = `${leftComp}:${rightComp}`;

      cloneState[pair] = value;
      return cloneState;

    default:
      return state;
  }
};

export default combineReducers({
  goal: goalReducer,
  singularSliders: singularSlidersReducer,
  multiSliders: multiSlidersReducer,
});
