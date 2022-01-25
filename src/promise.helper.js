import React from "react";

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("foo");
  }, 3000);
});

export function usePromise() {
  const [value, setValue] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  console.log(`Hook. Value: ${value}. isLoading: ${isLoading}`); // 1 // 8 // 12
  React.useEffect(() => {
    console.log(`Hook useEffect`); // 4
    function fetchData() {
      try {
        console.log(`Hook useEffect fetchData`); // 6
        myPromise.then((res) => {
          console.log(
            `Hook fetchData. Promise resolved. Before setValue. Value: ${value}. isLoading: ${isLoading}`
          ); // 7
          setValue(res);
          console.log(
            `Hook fetchData. Promise resolved. Before setIsLoading. Value: ${value}. isLoading: ${isLoading}`
          ); // 11
          setIsLoading(false);
          console.log(
            `Hook fetchData. Promise resolved. After setters. Value: ${value}. isLoading: ${isLoading}`
          ); // 15
        });
      } catch (error) {
        setIsLoading(false);
        console.log(`Inside error block.`);
      }
    }
    console.log(
      `Hook useEffect. Before calling fetchData(). Value: ${value}. isLoading: ${isLoading}`
    ); // 5
    fetchData();
  }, []);

  console.log(
    `Hook. Before return. Value: ${value}. isLoading: ${isLoading}`
  ); // 2 // 9 // 13
  return { value, isLoading };
}

// export function usePromise() {
//   const [value, setValue] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(true);
//   console.log(`Hook. Value: ${value}. isLoading: ${isLoading}`); // 1 // 8 // 12
//   React.useEffect(() => {
//     console.log(`Hook useEffect`); // 4
//     async function fetchData() {
//       try {
//         console.log(`Hook useEffect fetchData`); // 6
//         const res = await myPromise;
//         console.log(
//           `Hook fetchData. Promise resolved. Before setValue. Value: ${value}. isLoading: ${isLoading}`
//         ); // 7
//         setValue(res);
//         console.log(
//           `Hook fetchData. Promise resolved. Before setIsLoading. Value: ${value}. isLoading: ${isLoading}`
//         ); // 11
//         setIsLoading(false);
//         console.log(
//           `Hook fetchData. Promise resolved. After setters. Value: ${value}. isLoading: ${isLoading}`
//         ); // 15
//       } catch (error) {
//         setIsLoading(false);
//         console.log(`Inside error block.`);
//       }
//     }
//     console.log(
//       `Hook useEffect. Before calling fetchData(). Value: ${value}. isLoading: ${isLoading}`
//     ); // 5
//     fetchData();
//   }, []);

//   console.log(`Hook. Before return. Value: ${value}. isLoading: ${isLoading}`); // 2 // 9 // 13
//   return { value, isLoading };
// }
