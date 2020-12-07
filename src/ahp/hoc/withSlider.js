import React from "react";
import { connect } from "react-redux";

const withSlider = (WrappedComponent, settings) => {
  const { initValue, leftComp, rightComp, update } = settings;

  return connect(mapStateToProps, { update })((props) => {
    const [value, setValue] = React.useState(initValue);
    const [min, max] = [-8, 8];

    React.useEffect(() => {
      props.update(leftComp, rightComp, initValue);
    }, []);

    const marks = [
      {
        value: min,
        label: leftComp,
      },
      {
        value: max,
        label: rightComp,
      },
    ];

    const handleChange = (e, newValue) => {
      setValue(newValue);
      props.update(leftComp, rightComp, newValue);
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
