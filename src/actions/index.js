export const setGoal = (goal) => {
  return {
    type: "SET_GOAL",
    payload: goal,
  };
};

export const updateSingularSlider = (leftComp, rightComp, value) => {
  return {
    type: "UPDATE_SINGULAR_SLIDER",
    payload: { leftComp, rightComp, value },
  };
};

export const updateMultiSlider = (leftComp, rightComp, value) => {
  return {
    type: "UPDATE_MULTI_SLIDER",
    payload: { leftComp, rightComp, value },
  };
};
