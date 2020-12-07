import React from "react";
import { Slider } from "@material-ui/core";
import withSlider from "./hoc/withSlider";
import { updateMultiSlider } from "../actions";

const MultiSlider = (props) => {
  return (
    <Slider
      value={props.value}
      step={0.01}
      marks={props.marks}
      onChange={props.handleChange}
      min={props.min}
      max={props.max}
    />
  );
};

export default withSlider(MultiSlider, {
  initValue: [-1, 0, 1],
  leftComp: "multi lewy",
  rightComp: "multi prawy",
  update: updateMultiSlider,
});
