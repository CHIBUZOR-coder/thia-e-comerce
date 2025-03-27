import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  errColor: true,
  user: null,
  isUser: false,
  authUserData: null,
  review: [],
  postedReview: null,
};

// Thunk for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue, getState }) => {
    try {
      const response = await fetch("http://localhost:5000/api/loginUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.message || "Login failed");
      }

      console.log("Login successful:", data.message);

      // Get cart items from the state

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("isLogin", true);
      const localCartItems = getState().cart.cartItems;

      // If local cart has items, sync them with the server
      if (localCartItems.length > 0) {
        await Promise.all(
          localCartItems.map(async (item) => {
            const res = await fetch("http://localhost:5000/api/addToCart", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                clothId: parseInt(item.id),
                quantity: parseInt(item.quantity),
              }),
              credentials: "include",
            });

            return res.ok ? res.json() : null;
          })
        );
      }

      return data; // Return user data to be stored in Redux
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const UserAuthentification = createAsyncThunk(
  "user/authenticate",
  async (_, { rejectWithValue }) => {
    const isLogin = localStorage.getItem("isLogin");
    try {
      const res = await fetch("http://localhost:5000/api/protectedRoute", {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Opt
          //
          // ional, depending on your API
        },
        credentials: "include", // Include cookies in the request
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Authorization failed");
      }

      const data = await res.json();
      if (isLogin) {
        localStorage.setItem("userDetails", JSON.stringify(data.userInfo));
        return data;
      } else {
        return rejectWithValue("User not logged in");
      }

      // Assuming setUserRole is defined
      // Assuming setUserDetails is defined
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const AddReview = createAsyncThunk(
  "user/addReview",
  async ({ text }, { rejectWithValue }) => {
 
    console.log("redux:", text);

    try {
      const res = await fetch("http://localhost:5000/add_reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
        credentials: "include",
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getReview = createAsyncThunk(
  "user/getReview",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/get_client_reviews", {
        method: "GET",
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUser = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.errColor = true;
      });

    builder
      .addCase(UserAuthentification.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(UserAuthentification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authUserData = action.payload;
      })
      .addCase(UserAuthentification.rejected, (state, action) => {
        state.error = action.payload;
      });

    builder
      .addCase(AddReview.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(AddReview.fulfilled, (state, action) => {
        state.postedReview = action.payload;
        state.isLoading = false;
      })
      .addCase(AddReview.rejected, (state, action) => {
        state.errColor = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(getReview.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.review = action.payload;
      })
      .addCase(getReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const userReducer = UserSlice.reducer;
export const userActions = UserSlice.actions;
