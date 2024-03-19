import {createSlice} from "@reduxjs/toolkit"

const initialValue ={
    isAuthenticated:false,
    token:'',
    role:''
}
const UserSlice = createSlice({
    name: 'auth',
    initialValue,
    reducers:{
        setAuthenticated:(state, action)=>{
            state.isAuthenticated=action.payload
        },
        setToken:(state, action)=>
        {
            state.token=action.payload
        },
        setRole:(state, action)=>
        {
            state.role=action.apyload
        }
    }
})
export const{setAuthenticated,setRole,setToken}=UserSlice.actions;
export default UserSlice.reducer;
