import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./Directory/DirectoryReducer";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cartIcon']
}

const rootReducer = combineReducers({
  cartIcon: cartReducer,
  directory : directoryReducer

})
export default persistReducer(persistConfig, rootReducer)