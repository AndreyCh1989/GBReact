import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createBrowserHistory} from 'history';
import storage from 'redux-persist/lib/storage';
import {createRootReducer} from 'reducers';
import {routerMiddleware} from 'connected-react-router';
import {botMiddleware} from './middlewares/botMiddleware';
import {persistStore, persistReducer} from 'redux-persist';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'app',
    storage,
};

export const initStore = () => {
    const initialStore = {};
    const store = createStore(
        persistReducer(persistConfig, createRootReducer(history)),
        initialStore,
        composeWithDevTools(
            applyMiddleware(botMiddleware, routerMiddleware(history)),
        ));
    const persistor = persistStore(store);
    return {store, persistor};
};
