import {nanoid} from 'nanoid';
import {CHATS_MESSAGE_SEND, chatsMessageSendAction} from '../actions/chats';

export const botMiddleware = store => next => action => {
    if(action.type === CHATS_MESSAGE_SEND){
        const {chatId, isBot, author} = action.payload;
        if(!isBot){
            setTimeout(() => {
              const messages = store.getState().chats.entries.find(e => String(e.id) === String(chatId)).messages;
              if (messages[messages.length - 1].isBot === false) {
                store.dispatch(chatsMessageSendAction({id: nanoid(), chatId, text: `${author}, Roger that`, author: 'Robot', isBot: true}));
              }
            }, 4000);
        }
    }
    return next(action);
};
