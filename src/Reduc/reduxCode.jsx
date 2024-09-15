// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// // Initial state
// const initialState = {
//   isAuthenticated: false,
//   token: null,
//   user: null,
//   error: null,
//   users: []
// };

// // Fetch users (this can remain the same as earlier)
// export const fetchUsers = createAsyncThunk('auth/fetchUsers', async () => {
//   const response = await fetch('https://api.escuelajs.co/api/v1/users');
//   const data = await response.json();
//   return data;
// });

// // Async login action
// export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
//   try {
//     const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, password })
//     });

//     if (!response.ok) {
//       throw new Error('Login failed');
//     }

//     const data = await response.json(); // This returns token
//     return { email, password, token: data.access_token };
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

// // Slice
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch users success
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.users = action.payload;
//       })
//       // Handle login success
//       .addCase(loginUser.fulfilled, (state, action) => {
//         const loggedInUser = state.users.find(
//           (user) => user.email === action.payload.email
//         );
//         if (loggedInUser) {
//           state.isAuthenticated = true;
//           state.user = loggedInUser;
//           state.token = action.payload.token;
//           state.error = null;
//         } else {
//           state.error = 'User not found';
//         }
//       })
//       // Handle login failure
//       .addCase(loginUser.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   }
// });

// export default authSlice.reducer;


// Initial state
const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  error: null,
  users: []
};

// Fetch users (this can remain the same as earlier)
export const fetchUsers = createAsyncThunk('auth/fetchUsers', async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/users');
  const data = await response.json();
  return data;
});

// Async login action
export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json(); // This returns token
    return { email, password, token: data.access_token };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch users success
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      // Handle login success
      .addCase(loginUser.fulfilled, (state, action) => {
        const loggedInUser = state.users.find(
          (user) => user.email === action.payload.email
        );
        if (loggedInUser) {
          state.isAuthenticated = true;
          state.user = loggedInUser;
          state.token = action.payload.token;
          state.error = null;
        } else {
          state.error = 'User not found';
        }
      })
      // Handle login failure
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export default authSlice.reducer;
