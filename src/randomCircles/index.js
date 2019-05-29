import React, { useEffect } from "react";

import P5Wrapper from "../P5Wrapper";
import sketch from "./sketch";

const App = () => {
  useEffect(() => {
    return () => {
      window.removeEventListener("resize", () => {});
    };
  });

  return (
    <P5Wrapper
      // @Incomplete - do we need to put p5 in here?
      sketch={p5 => sketch(p5)}
      style={{ position: "absolute" }}
    />
  );
};

export default App;
