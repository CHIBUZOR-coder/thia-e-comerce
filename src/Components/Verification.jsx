// import { createContext, useEffect, useState } from "react";
// import DataResolve from "../pages/home/DataResolve";

// export const VerifyContext = createContext();

// const Verification = ({ children }) => {
//   const [userRole, setUserRole] = useState(null);

//   const { data: token } = DataResolve(
//     "http://localhost:5000/api/protectedRoute",
//     "GET"
//   );

//   console.log("token", token);

//   useEffect(() => {
//     if (token?.data?.role) {
//       setUserRole(token.data.role); // Immediately set role if available
//     } else {
//       setUserRole(false); // Default to false if no role
//     }
//   }, [token, userRole]);
//   console.log("userRole", userRole);

//   return (
//     <VerifyContext.Provider value={{ userRole }}>
//       {children}
//     </VerifyContext.Provider>
//   );
// };

// export default Verification;

