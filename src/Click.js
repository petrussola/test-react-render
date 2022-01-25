import React from "react";
import { usePromise } from "./promise.helper";

export default function PromiseStuff() {
  const [value, setValue] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  console.log(`Component PromiseStuff. Value: ${value}. isLoading: ${isLoading}`)

  function clickHandler() {
    console.log(`Click Handler`)
    setValue("mmmm");
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <div>Loaded completed.</div>}
      {!value && <div>No value yet.</div>}
      {value && <div>{value}</div>}
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}
