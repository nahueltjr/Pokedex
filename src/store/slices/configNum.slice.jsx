import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const numSlice = createSlice({
		name: 'num',
    initialState: 4,
    reducers: {
        changeNum: (state,action)=>{
            const num=action.payload
            return num
        }
    }
})

export const { changeNum } = numSlice.actions;

export default numSlice.reducer;