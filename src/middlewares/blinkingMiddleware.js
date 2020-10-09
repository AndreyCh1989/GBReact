import {CHATS_MESSAGE_SEND, chatBlinking} from '../actions/chats';
import { LOCATION_CHANGE } from 'connected-react-router';

export const blinkingMiddleware = store => next => action => {
    if (action.type === CHATS_MESSAGE_SEND){
        const {chatId, isBot} = action.payload;
        if (isBot === true) {
          store.dispatch(chatBlinking({chatId, blinking: true}));
        }
    }

    if (action.type === LOCATION_CHANGE) {
      // не идеально, но работает :)
      const chatId = action.payload.location.pathname.match(/[^\/]*$/);
      store.dispatch(chatBlinking({chatId, blinking: false}));
    }
    return next(action);
};
