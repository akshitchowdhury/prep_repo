import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  error: null,
  users: []
}

export const  fetchUsers = createAsyncThunk('auth/fetchUsers', async()=>{
  const response = await fetch('https://api.escuelajs.co/api/v1/users', {
    method: "GET"
  })
  const data= await response.json()

  return data;
})

export const loginUser = createAsyncThunk('auth/loginUser', async({email,password}, {rejectWithValue})=>{
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/auth/login',{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email,password}) 
    })
    if(!response.ok){
      throw new Error ('inavalid credentials')
    } 
    const data= await response.json()

    return {email,password,token: data.access_token}

  } catch (error) {
    return rejectWithValue(error.message)   
  }
  
})

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
     logOut : (state,action)=>{

      if(state.isAuthenticated===true){
        state.users = null;
        state.isAuthenticated = false;
        state.token = null;
        state.error = null;
      }
    }
  },
  extraReducers: (builder)=> {
    builder

    .addCase(fetchUsers.fulfilled, (state,action)=>{
      state.users = action.payload
    })

    .addCase(loginUser.fulfilled,(state,action)=>{
      const loggedInUser = state.users.find(user=>user.email===action.payload.email)

      if(loggedInUser){
        state.isAuthenticated = true;
        state.user = loggedInUser;
        state.token = action.payload.token
        state.error =null
      }
      else{
        state.error = 'User not found'
      }
    })

    .addCase(loginUser.rejected,(state,action)=>{
      state.error = action.payload
    })
  }

})

 export const {logOut} = authSlice.actions 
export default authSlice.reducer