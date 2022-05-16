import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { ISetAuthPayload } from "../../types";

const initialState = {
  isAuth: false,
}


const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    setAuth(state, action: PayloadAction<ISetAuthPayload>){
      console.log(1111);
      const {isAuth} = action.payload;
      
      state.isAuth = isAuth;
    }
  }
})

export default authReducer.reducer;

export type authState = ReturnType<typeof authReducer.reducer>;

export const {setAuth} = authReducer.actions; 