import {CHATS_MESSAGE_SEND, chatBlinkingAction} from '../actions/chats';
import { LOCATION_CHANGE } from 'connected-react-router';

export const blinkingMiddleware = store => next => action => {
    if (action.type === CHATS_MESSAGE_SEND){
        const {chatId, isBot} = action.payload;
        if (isBot === true) {
          store.dispatch(chatBlinkingAction({chatId, blinking: true}));
        }
    }

    if (action.type === LOCATION_CHANGE) {
      // не идеально, но работает :)
      const chatId = action.payload.location.pathname.match(/[^\/]*$/);
      const chat = store.getState().chats.entries.find(c => String(c.id) === String(chatId));
      if (chat) {
        store.dispatch(chatBlinkingAction({chatId: chatId[0], blinking: false}));
      }
    }
    return next(action);
};
