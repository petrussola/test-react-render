import React from "react";

export default function TestUseEffect() {
  const [value, setValue] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true)
  console.log(`Before useEffect. Value: ${value}. isLoading: ${isLoading}`); // 1

  React.useEffect(() => {
    console.log(`Inside useEffect. Before setValue. Value: ${value}. isLoading: ${isLoading}`);
    setValue("yay");
    console.log(`Inside useEffect. Before setIsLoading. Value: ${value}. isLoading: ${isLoading}`);
    setIsLoading(false)
    console.log(`End useEffect. Value: ${value}. isLoading: ${isLoading}`);
  }, []);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {value && <div>{value}</div>}
    </div>
  );
}
