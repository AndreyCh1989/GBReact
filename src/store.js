import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createBrowserHistory} from 'history';
import storage from 'redux-persist/lib/storage';
import {createRootReducer} from 'reducers';
import {routerMiddleware} from 'connected-react-router';
import {botMiddleware} from './middlewares/botMiddleware';
import {blinkingMiddleware} from './middlewares/blinkingMiddleware';
import {persistStore, persistReducer} from 'redux-persist';
import { apiMiddleware } from 'redux-api-middleware';
import reduxThunk from 'redux-thunk';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'app',
    storage,
    blacklist: ['chats'],
};

export const initStore = () => {
    const initialStore = {};
    const store = createStore(
        persistReducer(persistConfig, createRootReducer(history)),
        initialStore,
        composeWithDevTools(
            applyMiddleware(botMiddleware, blinkingMiddleware, routerMiddleware(history), apiMiddleware, reduxThunk),
        ));
    const persistor = persistStore(store);
    return {store, persistor};
};
