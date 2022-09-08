import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./Directory/DirectoryReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
    key: 'roos',
    storage,
    whiteList: ['cartIcon']
}

const rootReducer = combineReducers({
  cartIcon: cartReducer,
  directory: directoryReducer,
  shop : shopReducer

})
export default persistReducer(persistConfig, rootReducer)