import update from 'react-addons-update';

import {CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_ADD, CHAT_BLINKING} from 'actions/chats';

import {chats} from '../data/chats';

const initialState = {
    loading: false,
    entries: [],
};

export const chatsReducer = (state = initialState, action) => {
    let chat = null;
    if (action.payload?.chatId) {
      chat = state.entries.find(e => String(e.id) === String(action.payload.chatId));
    }

    switch(action.type){
        case CHATS_LOAD:
            return {
                ...state,
                entries: chats,
            };

        case CHATS_MESSAGE_SEND:
            return update(state, {
                entries: {
                    [state.entries.indexOf(chat)]: {
                        messages: {$push: [{id: action.payload.id, text: action.payload.text, author: action.payload.author, isBot: action.payload.isBot}]},
                    },
                },
            });

        case CHATS_ADD:
            return update(state, {
                entries: {
                    $push: [{...action.payload, messages: []}]
                }
            });

        case CHAT_BLINKING:
            const q =  update(state, {
                entries: {
                    [state.entries.indexOf(chat)]: {$merge: {blinking: action.payload.blinking}},
                },
            });
            return q;

        default:
            return state;
    }
}
