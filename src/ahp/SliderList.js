import React from "react";
import withComps from "./hoc/withComps";

const SliderList = (props) => {
  let sliders;

  sliders = props.pairs.map((pair) => {
    return (
      <p key={pair} criteria={props.criteria}>
        {pair}
      </p>
    );
  });

  return <div>{sliders}</div>;
};

export default withComps(SliderList);
