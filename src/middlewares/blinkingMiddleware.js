import {CHATS_MESSAGE_SEND, chatBlinking} from '../actions/chats';

export const blinkingMiddleware = store => next => action => {
    if(action.type === CHATS_MESSAGE_SEND){
        const {chatId, isBot} = action.payload;
        if (isBot === true) {
          store.dispatch(chatBlinking({chatId, blinking: true}));
          setTimeout(() => {
            store.dispatch(chatBlinking({chatId, blinking: false}));
          }, 3000)
        }
    }
    return next(action);
};
