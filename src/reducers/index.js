import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import {chatsReducer} from './chats';
import {profilesReducer} from './profiles';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  chats: chatsReducer,
  profiles: profilesReducer,
});
