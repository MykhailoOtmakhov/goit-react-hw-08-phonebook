import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts-reducer'
import logger from 'redux-logger'
// import storage from 'redux-persist/lib/storage'
import {
    // persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from 'redux-persist';

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// }

const myMiddleware = store => next => action => {

  next(action);
}
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }), 
  myMiddleware,
  logger,
]

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV ==='development',
})

// const persistor = persistStore(store)

export default 
// { 
  store
  // , persistor };
