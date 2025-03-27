// const useLocalStorage = () => {
//   const setItem = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value)); // Correctly pass both arguments
//   };
//   const getItem = (key) => {
//     const storedValue = localStorage.getItem(key)
//       ? localStorage.getItem(key)
//       : null;

//     // Return null if the stored value is null or undefined
//     if (storedValue === null || storedValue === undefined) {
//       return null;
//     }

//     try {
//       return JSON.parse(storedValue); // Try parsing the stored value
//     } catch (error) {
//       console.error(
//         `Error parsing JSON from localStorage for key: ${key}`,
//         error
//       );
//       return null; // Return null if JSON parsing fails
//     }
//   };

//   const deleteItem = (key) => {
//     localStorage.removeItem(key);
//   };

//   return { setItem, getItem, deleteItem };
// };

// export default useLocalStorage;


const useLocalStorage = () => {
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key) => {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return null; // Directly check if it's falsy

    try {
      return JSON.parse(storedValue);
    } catch (error) {
      console.error(
        `Error parsing JSON from localStorage for key: ${key}`,
        error
      );
      return null;
    }
  };

  const deleteItem = (key) => {
    localStorage.removeItem(key);
  };

  return { setItem, getItem, deleteItem };
};

export default useLocalStorage;
