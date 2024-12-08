// import React, { useState } from "react";

// function HandleCount() {
//   const [count, setCount] = useState(0);
// console.log("counting")
//   const increment = () => {
//     setCount((prevCount) => {
//       prevCount + 1;
//     });
//   };

//   const decrement = () => {
//     setCount((prevCount) => {
//       prevCount - 1;
//     });
//   };

//   return [count, increment, decrement];
// }

// export default HandleCount;
import React, { useState } from "react";

function useHandleCount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
 console.log("count");
  const increment = () => {
     console.log("Increment called: ");
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return [count, increment, decrement];
}

export default useHandleCount;
