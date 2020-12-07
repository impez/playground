import React from "react";
import SliderList from "./ahp/SliderList";

const App = () => {
  const items = ["Witcher", "Cyberpunk", "Rdr2", "Gta"];
  const criterias = ["Graphics", "Story", "Price"];

  return (
    <div>
      <SliderList items={items} criterias={criterias} />
    </div>
  );
};

export default App;
