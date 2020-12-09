import React from "react";
import { connect } from "react-redux";

const withSlider = (WrappedComponent, settings) => {
  const { initValue, update } = settings;

  return connect(mapStateToProps, { update })((props) => {
    const [value, setValue] = React.useState(initValue);
    const [min, max] = [-8, 8];

    React.useEffect(() => {
      props.update(props.leftComp, props.rightComp, initValue);
    }, []);

    const marks = [
      {
        value: min,
        label: props.leftComp,
      },
      {
        value: max,
        label: props.rightComp,
      },
    ];

    const handleChange = (e, newValue) => {
      setValue(newValue);
      props.update(props.leftComp, props.rightComp, newValue);
    };

    return (
      <div style={{ width: "50%" }}>
        <WrappedComponent
          {...props}
          handleChange={handleChange}
          value={value}
          marks={marks}
          min={min}
          max={max}
        />
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  return state;
};

export default withSlider;
