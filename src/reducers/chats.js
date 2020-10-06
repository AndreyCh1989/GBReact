import update from 'react-addons-update';

import {CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_ADD} from 'actions/chats';

import {chats} from '../data/chats';

const initialState = {
    loading: false,
    entries: [],
};

export const chatsReducer = (state = initialState, action) => {
    switch(action.type){
        case CHATS_LOAD:
            return {
                ...state,
                entries: chats,
            };

        case CHATS_MESSAGE_SEND:
            const chat = state.entries.find(e => String(e.id) === String(action.payload.chatId));
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

        default:
            return state;
    }
}
