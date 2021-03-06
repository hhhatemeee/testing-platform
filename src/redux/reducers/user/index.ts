import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserReducerState } from "../../../shared/types";
import { IUser } from "../../../types";

const initialState: UserReducerState ={
  id: null,
  username: null,
  lastName: null,
  firstName:null,
};

const userReducer = createSlice({
  name:'user',
  initialState,
  reducers:{
    setUser(state, action: PayloadAction<IUser>){
      const {id,username, firstName, lastName} = action.payload;
      state.firstName = firstName;
      state.id = id;
      state.username = username;
      state.lastName = lastName;
    }
  }
});

export default userReducer.reducer;
export type userState = ReturnType<typeof userReducer.reducer>;
export const {setUser} = userReducer.actions;