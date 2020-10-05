import React from "react";
import { MessageForm } from 'components/MessageForm';
import { Message } from "components/Message";
import {ChatList} from "components/ChatList";
import { Typography } from '@material-ui/core';

import './Messenger.scss';

export class Messenger extends React.Component {
  render () {
    const {chats, messages, handleChatsAdd, handleMessageSend} = this.props;

    return (
      <>
        <Typography className='messages-field' component="div">
          <ChatList addChat={handleChatsAdd} chats={chats}/>
          <div className='messages'>
            {
              messages.map((message, index) => <Message {...message} key={index}/>)
            }
          </div>
        </Typography>
        <MessageForm addMessage={handleMessageSend}>Send</MessageForm>
      </>
    )
  }
}
