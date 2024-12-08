// import React, { createContext, useState, useEffect, useContext } from "react";

// const QuantityContext = createContext();

// export const QuantityProvider = ({ children }) => {
//   const [quantities, setQuantities] = useState(() => {
//     const savedQuantities =
//       JSON.parse(localStorage.getItem("all_quantities")) || {};
//     return savedQuantities;
//   });

//   const [totalQuantity, setTotalQuantity] = useState(() => {
//     const total = Object.values(quantities).reduce((acc, qty) => acc + qty, 0);
//     return total;
//   });

//   useEffect(() => {
//     localStorage.setItem("all_quantities", JSON.stringify(quantities));
//     const total = Object.values(quantities).reduce((acc, qty) => acc + qty, 0);
//     setTotalQuantity(total);
//   }, [quantities]);

//   const updateQuantity = (id, quantity) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [id]: quantity,
//     }));
//   };

//   return (
//     <QuantityContext.Provider
//       value={{ quantities, totalQuantity, updateQuantity }}
//     >
//       {children}
//     </QuantityContext.Provider>
//   );
// };

// export const UseQuantity = () => useContext(QuantityContext);

import React, { createContext, useContext, useState, useEffect } from "react";

const QuantityContext = createContext();

export const QuantityProvider = ({ children }) => {
  const [quantities, setQuantities] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const storedQuantities =
      JSON.parse(localStorage.getItem("quantities")) || {};
    setQuantities(storedQuantities);
    const storedTotalQuantity = Object.values(storedQuantities).reduce(
      (a, b) => a + b,
      0
    );
    setTotalQuantity(storedTotalQuantity);
  }, []);

  const updateQuantity = (id, quantity) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities, [id]: quantity };
      localStorage.setItem("quantities", JSON.stringify(newQuantities));
      setTotalQuantity(Object.values(newQuantities).reduce((a, b) => a + b, 0));
      return newQuantities;
    });
  };

  return (
    <QuantityContext.Provider
      value={{ quantities, totalQuantity, updateQuantity }}
    >
      {children}
    </QuantityContext.Provider>
  );
};

export const UseQuantity = () => {
  return useContext(QuantityContext);
};
