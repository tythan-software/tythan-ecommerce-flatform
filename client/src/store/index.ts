import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from './slices/productSlice'

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ 
  product: productsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
        });
    let persistor = persistStore(store);
    return { store, persistor };
}
