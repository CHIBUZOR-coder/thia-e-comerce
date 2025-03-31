import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  cartItems: [],
  cartCount: 0,
  status: "idle",
  error: null,
  newCart: null,
  deletedCart: null,
  res: null,
  render: false,
};

// Fetch cart for logged-in users
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://thia-backend.onrender.com/api/getCart",
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log("fetchh:", data);

      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Add item to cart (POST request for authenticated users)
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ prod, num, clothSize }, { rejectWithValue }) => {
    if (!clothSize) {
      return rejectWithValue("Size is required");
    }

    try {
      const response = await fetch(
        "https://thia-backend.onrender.com/api/addToCart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            clothId: prod.id,
            quantity: num,
            sizee: clothSize,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data; // Return updated cart items
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete item from cart (DELETE request for authenticated users)
export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async ({ itemId, userId }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://thia-backend.onrender.com/api/deleteCart",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ userId, itemId }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data; // Return updated cart items
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Local cart management for anonymous users
    addToCartLocal: (state, action) => {
      const { prod, num, clothSize } = action.payload;
      const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      const existingItem = storedItems.find(
        (item) => item.id === prod.id && item.size === clothSize
      );

      if (existingItem) {
        existingItem.quantity += num;
        existingItem.amount = existingItem.quantity * prod.price;
      } else {
        storedItems.push({
          id: prod?.id,
          name: prod?.name,
          price: prod?.price,
          brand: prod?.brand,
          image: prod?.image,
          style: prod?.style,
          quantity: num,
          size: clothSize || prod?.size,
          amount: prod?.price * num,
        });
      }
      state.cartItems = storedItems;
      state.cartCount = storedItems.reduce((sum, i) => sum + i.quantity, 0);
      state.render = true;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
    },

    removeFromCartLocal: (state, action) => {
      const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const { itemId, clothSize } = action.payload;
      const itemIndex = storedItems.findIndex((item) => item.id === itemId);
      console.log("It:", itemId);
      

      if (itemIndex >= 0) {
        storedItems[itemIndex].quantity--;
        storedItems[itemIndex].amount =
          parseFloat(storedItems[itemIndex].amount) -
          parseFloat(storedItems[itemIndex].price.toFixed(2));

        if (storedItems[itemIndex].quantity === 0) {
          storedItems.splice(itemIndex, 1);
        }
      }
      state.cartItems = storedItems;

      state.cartCount = state.cartItems.reduce((sum, i) => sum + i.quantity, 0);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      // .addCase(fetchCart.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.cartItems = action.payload;
      //   state.cartCount = state.cartItems.reduce(
      //     (sum, item) => sum + item.quantity,
      //     0
      //   );
      //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      //   localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
      // })

      .addCase(fetchCart.fulfilled, (state, action) => {
        // console.log("addToCart fulfilled payload:", action.payload);
        state.status = "succeeded";
        state.res = action.payload.message;
        state.cartItems = action.payload.data || []; // Ensure it's an array
        state.cartCount = state.cartItems.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
      })

      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Handle Add to Cart (API)
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.newCart = action.payload; // Replace cart with the latest backend response

        localStorage.setItem("newCart", JSON.stringify(state.newCart));
        // localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
      })

      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Handle Delete from Cart (API)
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deletedCart = action.payload.data;
        state.res = action.payload;
        localStorage.setItem("newCart", JSON.stringify(state.newCart));
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
