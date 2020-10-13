export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHAT_BLINKING = 'CHAT_BLINKING';
export const CHATS_REQUEST = 'CHATS_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_REQUEST_FAILURE = 'CHATS_REQUEST_FAILURE';

/*export const chatsLoadAction = () => ({
    type: CHATS_LOAD,
});*/


export const chatsMessageSend = (message) => ({
    type: CHATS_MESSAGE_SEND,
    payload: message,
});

export const chatsAdd = (chat) => ({
    type: CHATS_ADD,
    payload: chat,
});

export const chatBlinking = (chat) => ({
    type: CHAT_BLINKING,
    payload: chat
});

export const chatsRequestAction = () => ({
    type: CHATS_REQUEST,
});

export const chatsLoadSuccessAction = (data) => ({
    type: CHATS_LOAD_SUCCESS,
    payload: data,
});

export const chatsRequestFailureAction = (error) => ({
    type: CHATS_REQUEST_FAILURE,
    payload: error,
});

export const chatsLoadAction = () => {
    return async (dispatch) => {
        try {
            dispatch(chatsRequestAction());
            const result = await fetch('http://localhost:3000/chats?_embed=messages');
            dispatch(chatsLoadSuccessAction(await result.json()));
        } catch(error){
            dispatch(chatsRequestFailureAction(error));
        }
    };
};

export const chatsMessageSendAction = (message) => {
    return async (dispatch) => {
        try {
            const result = await fetch(
              'http://localhost:3000/messages',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
              });
            dispatch(chatsMessageSend(message));
        } catch(error){
            dispatch(chatsRequestFailureAction(error));
        }
    };
};

export const chatsAddAction = (chat) => {
    return async (dispatch) => {
        try {
            const result = await fetch(
              'http://localhost:3000/chats',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(chat)
              });
            dispatch(chatsAdd(chat));
        } catch(error){
            dispatch(chatsRequestFailureAction(error));
        }
    };
};

export const chatBlinkingAction = (chat) => {
    return async (dispatch) => {
        try {
            console.log('chat', chat);
            const result = await fetch(
              `http://localhost:3000/chats/${chat.chatId}`,
              {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(chat)
              });
            dispatch(chatBlinking(chat));
        } catch(error){
            dispatch(chatsRequestFailureAction(error));
        }
    };
};
