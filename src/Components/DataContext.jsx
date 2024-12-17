import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import DataResolve from "../pages/home/DataResolve";
import useLocalStorage from "./UseLstorag";
// import { VerifyContext } from "./Verification";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [lightMode, setlightMode] = useState(true);
  const [lightModWeb, setlightModeWeb] = useState(true);

  const [cartCount, setCartCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [erroMess, setErrorMess] = useState(null);
  const { setItem, getItem, deleteItem } = useLocalStorage("userInfo");
  const [CartItems, SetCartItems] = useState([]);
  const [Products, SetProducts] = useState([]);

  const [appCart, setAppcart] = useState(null);
  const [sizeError, setSizeError] = useState(false);

  //*********************** */
  //Retrieving all stored data in loca storage for user authentification
  const IsAuthentified = getItem("isAuthentified") || false;
  console.log("Auth", IsAuthentified);
  const localCart = getItem("cartItems") ? getItem("cartItems") : [];
  console.log("localCrat", localCart);

  const UserInfo = getItem("userInfo") || false;
  console.log("userInfo:", UserInfo);
  const isUser = UserInfo.role === "USER" || UserInfo.role === "ADMIN";
  console.log("IsUser", isUser);

  //*************************************** */
  //Removing all data  from local storage if token has expired
  const checkTokenExpiry = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")); // Get userInfo from localStorage
      if (!userInfo) {
        console.log("userInfo not found");
        return;
      } else if (!userInfo.exp) {
        console.log("userInfo not yet expired");
        return;
      }

      const expTime = userInfo.exp * 1000; // Convert exp from seconds to milliseconds
      const currentTime = Date.now(); // Get current time in milliseconds

      // Check if the token is expired
      if (expTime < currentTime) {
        console.log("Token has expired. Clearing localStorage and cookies...");

        // Clear the localStorage items related to authentication
        // localStorage.removeItem("userInfo");
        // localStorage.removeItem("isAuthentified");
        // localStorage.removeItem("UsercartIems");
        localStorage.clear();
        // Send a request to the backend to clear the HTTP-only cookie
        const res = await fetch("http://localhost:5000/clear-cookies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        let data;

        if (res.ok) {
          data = await res.json(); // Make sure to wait for the response
          console.log(data);
        } else {
          console.log("Failed to clear cookies. Server returned an error.");
        }

        // Optionally, perform other actions like redirecting the user to the login page
        // window.location.href = "/login"; // Redirect to login page, or show an alert, etc.
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // *********************************/
  //Authentification Retriver. It gets  all user details for uthentification and stores thwm in local storagre
  const Autentification = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/protectedRoute", {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Optional, depending on your API
        },
        credentials: "include", // Include cookies in the request
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Authorization failed");
      }

      const data = await res.json();
      if (isLogin) {
        localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
      }

      // Assuming setUserRole is defined
      // Assuming setUserDetails is defined
    } catch (error) {
      console.error("Error in Authentification:", error.message);
    }
  };

  // Optionally call the checkTokenExpiry function when the app starts
  useEffect(() => {
    checkTokenExpiry();
  }, []);

  const fetchCart = async () => {
    if (isUser) {
      // Authenticated user
      try {
        const res = await fetch("http://localhost:5000/api/getCart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Keep it only here
        });
        const data = await res.json();

        if (res.ok) {
          console.log(data);
          // Save to local storage and update state

          SetCartItems(data.data); // Assuming data is an array of cart items
          localStorage.setItem("cartItems", JSON.stringify(data.data));
        } else {
          console.log("error", "Could not get cart");
        }
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    } else {
      // Unauthenticated user
      const localCart = localStorage.getItem("cartItems");
      if (localCart) {
        SetCartItems(JSON.parse(localCart));
      } else {
        SetCartItems([]); // Clear cart items if nothing is in local storage
      }
    }
  };

  //****************************************** */
  //Login form. it is called from login component when a user tries to login
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      let data;
      let localCartItems;
      data = await response.json();
      if (response.ok) {
        localStorage.removeItem("UsercartIems");
        console.log("Login successful:", data.message);
        // UserLogALert(data.role);
        setIsLogin(true);
        localCartItems = getItem("cartItems");

        if (localCartItems) {
          await Promise.all(
            localCartItems.products.map(async (item) => {
              const res = await fetch("http://localhost:5000/api/addToCart", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  clothId: parseInt(item.product.id),
                  quantity: parseInt(item.quantity),
                }),
                credentials: "include",
              });

              const cartdata = await res.json();

              if (res.ok) {
                console.log("cartdata", cartdata);
                deleteItem("cartItems");
                SetCartItems(cartdata.data);
                fetchCart();
              }
            })
          );
        }

        return data;
      } else {
        throw new Error(data.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMess(error.message);
    }
  };

  //If user is logged in, then the infor is being retrived using the Authentification fetch fution. This is because i used http only cookies so the token sent to cookies cannot be acessed by javascript. i have to pass these info to the front end via the Authentification  fetch function
  useEffect(() => {
    if (isLogin) {
      setTimeout(() => {
        console.log("calling Authentification");
        Autentification();
      }, 200);
    }
  }, [isLogin]);

  //settting isAuthentified in local storage to confirm user authentification
  useEffect(() => {
    if (isLogin) {
      // setIsAuthenthified(true);
      setItem("isAuthentified", true);
    }
  }, [isLogin]);

  useEffect(() => {
    console.log("CartItems:", CartItems);
    if (localCart.products) {
      SetProducts(localCart.products);
    } else if (localCart) {
      SetProducts(localCart);
    }
    console.log("products", Products);
    // console.log("count", cartCount);
  }, [CartItems]); // Dependency is CartItems to ensure this effect runs only when CartItems change

  useEffect(() => {
    console.log("products updated", Products); // Log for debugging purposes
    const Cartcount = Products.reduce((acc, curr) => acc + curr.quantity, 0);
    setCartCount(Cartcount); // Update cartCount here
  }, [Products]); // Dependencies: Products array should trigger when items are added/removed

  useEffect(() => {
    console.log("cartcount", cartCount);
  }, [cartCount]);

  const HandleModeChangeWeb = () => {
    setlightModeWeb(!lightModWeb);
  };

  const [pop, setPop] = useState(false);
  const HandlePop = () => {
    setPop(true);
    setTimeout(() => setPop(false), 200);
  };

  const showHide = (success, trueText, falseText) =>
    success === "true" ? <h2>{trueText}</h2> : <h2>{falseText}</h2>;

  const {
    data: Allproducts,
    isLoading,
    error,
  } = DataResolve("http://localhost:5000/api/Cloths", "GET");

  // console.log(Allproducts);

  const filterProductsByBrand = (brand) =>
    Allproducts?.filter((product) => product.brand === brand) || [];

  const AnkaraProducts = filterProductsByBrand("Ankara");
  const AhebiProducts = filterProductsByBrand("Ashebi");
  const CoperateProducts = filterProductsByBrand("coperate");
  const KaftanProducts = filterProductsByBrand("kaftan");
  const MatchingProducts = filterProductsByBrand("matching");
  //  useEffect(()=>{
  //    console.log(MatchingProducts);
  //  }, [MatchingProducts])

  const BridalProducts = filterProductsByBrand("bridals");
  const KidiesProducts = filterProductsByBrand("kidies");
  const Featured = filterProductsByBrand("featured");

  // AddToCart function in the front-end
  // const AddToCart = async (prod, num, clothSize) => {
  //   if (isUser) {
  //     try {
  //       const res = await fetch("http://localhost:5000/api/addToCart", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           clothId: prod.id,
  //           quantity: num,
  //           sizee: clothSize,
  //         }), // Use prod.id and num
  //         credentials: "include",
  //       });

  //       const data = await res.json();
  //       if (res.ok) {
  //         // Add the updated cart items
  //         console.log(data);
  //         SetCartItems(data.data);
  //         console.log("data/data:", data.data);

  //         console.log("carttt", CartItems);

  //         fetchCart();
  //         // console.log(data);

  //         showHide(true, "Product was added to cart successfully", "false");
  //       } else {
  //         showHide(false, "Error", "Product was not added to cart");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     // Handling localStorage for anonymous users
  //     const storedCart = JSON.parse(localStorage.getItem("cartItems")) || {
  //       products: [],
  //     };

  //     const existingItemIndex = storedCart.products.findIndex(
  //       (item) => item.product.id === prod.id && item.size === clothSize
  //     );

  //     if (existingItemIndex !== -1) {
  //       // If item exists, update the quantity and amount
  //       storedCart.products[existingItemIndex].quantity += num;
  //       storedCart.products[existingItemIndex].amount =
  //         storedCart.products[existingItemIndex].quantity * prod.price;
  //     } else {
  //       // If item doesn't exist, add new item
  //       storedCart.products.push({
  //         product: prod,
  //         quantity: num,
  //         size: clothSize,
  //         amount: prod.price * num,
  //       });
  //     }

  //     localStorage.setItem("cartItems", JSON.stringify(storedCart));

  //     SetCartItems(storedCart); // Update state
  //     showHide(true, "Product was added to cart successfully", "false");
  //   }
  // };

  const AddToCart = async (prod, num, clothSize) => {
    if (!clothSize) {
      setSizeError(true);
      return;
    }

    if (isUser) {
      try {
        const res = await fetch("http://localhost:5000/api/addToCart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clothId: prod.id,
            quantity: num,
            sizee: clothSize,
          }),
          credentials: "include",
        });

        const data = await res.json();
        if (res.ok) {
          SetCartItems(data.data); // Set updated cart items
          fetchCart(); // Fetch updated cart from server
          showHide(true, "Product was added to cart successfully", "false");
        } else {
          showHide(false, "Error", "Product was not added to cart");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // Handling localStorage for anonymous users
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || {
        products: [],
      };

      const existingItemIndex = storedCart.products.findIndex(
        (item) => item.product.id === prod.id && item.size === clothSize
      );

      if (existingItemIndex !== -1) {
        // If item exists, update the quantity and amount
        storedCart.products[existingItemIndex].quantity += num;
        storedCart.products[existingItemIndex].amount =
          storedCart.products[existingItemIndex].quantity * prod.price;
      } else {
        // If item doesn't exist, add new item
        storedCart.products.push({
          product: prod,
          quantity: num,
          size: clothSize,
          amount: prod.price * num,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(storedCart));

      SetCartItems(storedCart); // Update state
      showHide(true, "Product was added to cart successfully", "false");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <DataContext.Provider
      value={{
        AnkaraProducts,
        AhebiProducts,
        error,
        isLoading,
        CoperateProducts,
        KaftanProducts,
        MatchingProducts,
        BridalProducts,
        KidiesProducts,
        Allproducts,
        AddToCart,
        cartCount,
        sizeError,
        appCart,
        lightMode,
        isUser,
        UserInfo,
        IsAuthentified,
        isLogin,
        HandleModeChangeWeb,
        lightModWeb,
        showHide,
        handleLogin,
        pop,
        setErrorMess,
        HandlePop,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
