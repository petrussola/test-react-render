import React from "react";
import { render } from "react-dom"; // or >> import REACTDOM from 'react-dom'
import Whenever from "./Whenever";
import PromiseStuff from './PromiseStuff'
import Click from './Click'
import TestUseEffect from './UseEffect'

const App = () => {
  return (
    <div>
      {/* <Whenever /> */}
      <PromiseStuff />
      {/* <Click /> */}
      {/* <TestUseEffect /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
