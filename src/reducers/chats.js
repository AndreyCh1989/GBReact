import update from 'react-addons-update';

import {
  CHATS_REQUEST,
  CHATS_LOAD_SUCCESS,
  CHATS_REQUEST_FAILURE,
  CHATS_MESSAGE_SEND,
  CHATS_ADD,
  CHAT_BLINKING} from 'actions/chats';

const initialState = {
    loading: false,
    error: false,
    entries: [],
};

export const chatsReducer = (state = initialState, action) => {
    let chat = null;
    if (action.payload?.chatId) {
      chat = state.entries.find(e => String(e.id) === String(action.payload.chatId));
    }

    switch(action.type){
        case CHATS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case CHATS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };

        case CHATS_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                error_text: action,
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
            return update(state, {
                entries: {
                    [state.entries.indexOf(chat)]: {$merge: {blinking: action.payload.blinking}},
                },
            });

        default:
            return state;
    }
}
