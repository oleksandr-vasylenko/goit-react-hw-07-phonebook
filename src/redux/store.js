import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { myContactSlice } from './contactSlice';
import { myFilterSlice } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactReducer = persistReducer(
  persistConfig,
  myContactSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,

    filter: myFilterSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
