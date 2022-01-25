import React from "react";
import { usePromise } from "./promise.helper";

export default function PromiseStuff() {
  const { value, isLoading } = usePromise();
  console.log(
    `Component PromiseStuff. After usePromise. Value: ${value}. IsLoading: ${isLoading}`
  ); // 3 // 10 // 14
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>{`Value: ${value}`}</div>;
}
