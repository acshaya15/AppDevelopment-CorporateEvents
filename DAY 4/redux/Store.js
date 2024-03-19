import {combineReducers} from "redux";
import UserSlice from "./UserSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist"
import {configurationStore} from "@reduxjs/toolkit";

const rootReducer=combineReducers({
    auth:UserSlice
})
const persistConfig = {
    key:'root',
    storage
}
const persitReducer =persisreducer(persistConfig, rootReducer)

const Store = configureStore({
    reducer:persistReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })
})
export const persistor=persistStore(store)
export default Store