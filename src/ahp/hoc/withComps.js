import React from "react";

const pairs = (arr) => {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const pair = `${arr[i]}:${arr[j]}`;
      pairs.push(pair);
    }
  }

  return pairs;
};

const withComps = (WrappedComponent) => {
  return (props) => {
    if (props.criterias) {
      const componentsList = props.criterias.map((criteria) => {
        return (
          <div key={criteria}>
            Zdefiniuj preferencję pod względem {criteria}
            <WrappedComponent
              {...props}
              pairs={pairs(props.items)}
              criteria={criteria}
            />
          </div>
        );
      });

      return (
        <div>
          {/*If we have criterias to which we wanna compare, then loop through
          those criterias and return however many components there needs to
          be... and pass additional parameter, that is which Criteria it's
          compared to.*/}
          {componentsList}
        </div>
      );
    } else {
      return (
        <div>
          Zdefiniuj swoją preferencję
          <WrappedComponent {...props} pairs={pairs(props.items)} />;
        </div>
      );
    }
  };
};

export default withComps;
