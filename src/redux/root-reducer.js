import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,    // sessionstorage for session, storage: local storage
    whitelist: ['cart']  // the reducer to be stored in localstorage
  };

  const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
  });
  
  export default persistReducer(persistConfig, rootReducer);