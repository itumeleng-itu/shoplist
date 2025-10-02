import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import userReducer from "./slices/userSlice"
import shoppingListReducer from "./slices/shoppingListSlice"

export const store = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
        shoppingLists: shoppingListReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;