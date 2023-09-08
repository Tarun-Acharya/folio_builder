import { configureStore, createSlice } from "@reduxjs/toolkit";

const workSlice = createSlice({
  name: "workExperience",
  initialState: { workExperiences: [] },
  reducers: {
    addExperience(state, action) {
      state.workExperiences = action.payload;
    },
  },
});

const store = configureStore({
  reducer: workSlice.reducer,
});
export default store;
export const workActions = workSlice.actions;
