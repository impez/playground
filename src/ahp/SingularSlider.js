import React from "react";
import { Slider } from "@material-ui/core";
import withSlider from "./hoc/withSlider";
import { updateSingularSlider } from "../actions";

const SingularSlider = (props) => {
  return (
    <Slider
      value={props.value}
      step={1}
      marks={props.marks}
      onChange={props.handleChange}
      min={props.min}
      max={props.max}
    />
  );
};

export default withSlider(SingularSlider, {
  initValue: [0],
  leftComp: "wyburz lewy",
  rightComp: "wyburz prawy",
  update: updateSingularSlider,
});
