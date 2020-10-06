import React from 'react';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';

import {Messenger} from 'components/Messenger';
import {chatsLoadAction, chatsMessageSendAction, chatsAddAction} from 'actions/chats';

class MessengerContainerClass extends React.Component {
    componentDidMount(){
        this.props.chatsLoadAction();
    }

    handleMessageSend = (message) => {
        message.id = nanoid();
        message.isBot = false;
        message.chatId = this.props.chatId;
        this.props.chatsMessageSendAction(message);
    };

    handleChatsAdd = (chat) => {
        chat.id = nanoid();
        this.props.chatsAddAction(chat);
    };

    render(){
        const {chats, messages} = this.props;

        return (
            <Messenger chats={chats} messages={messages} handleChatsAdd={this.handleChatsAdd} handleMessageSend={this.handleMessageSend}/>
        );
    }
}

function mapStateToProps(state, ownProps){
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;
    const chat = chats.find(c => String(c.id) === String(match.params.id));
    if(match && chat){
      messages = chat.messages;
    } else {
      messages = [];
    }

    return {
        chats,
        messages,
        chatId: match ? match.params.id : null,
    };
}

function mapDispatchToProps(dispatch){
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
        chatsAddAction: (chat) => dispatch(chatsAddAction(chat)),
    };
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass);
