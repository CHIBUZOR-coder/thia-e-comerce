// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { clothReducers } from "../features/cloth/clothSlice.js";
import { cartReducer } from "../features/cart/cartSlice.js";
import { userReducer } from "../features/user/userSlice.js";

// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cloth: clothReducers,
    cart: cartReducer,
    user: userReducer,

  },
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
