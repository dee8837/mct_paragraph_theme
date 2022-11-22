import {createSlice} from "@reduxjs/toolkit"

const ThemeSlice = createSlice({
    name:"Theme",
    initialState:{
        allowbtn:"Allow Edit",
        colorbtn:"Black",
        fontbtn:12,
        fontfamilybtn:""

    
    },
    reducers:{
        setObj1:(initialState,action)=>{
            initialState.allowbtn=action.payload
        },
        setObj2:(initialState,action)=>{
            initialState.colorbtn=action.payload
        },
        setObj3:(initialState,action)=>{
            initialState.fontbtn=action.payload
        },
        setObj4:(initialState,action)=>{
            initialState.fontfamilybtn=action.payload
        }

    }

})

export const {setObj1}=ThemeSlice.actions
export const {setObj2}=ThemeSlice.actions
export const {setObj3}=ThemeSlice.actions
export const {setObj4}=ThemeSlice.actions
export default ThemeSlice.reducer;