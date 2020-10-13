import React from "react";
import { MessageForm } from 'components/MessageForm';
import { Message } from "components/Message";
import {ChatList} from "components/ChatList";
import { Typography } from '@material-ui/core';

import './Messenger.scss';

export class Messenger extends React.Component {
  render () {
    const {chats, messages, handleChatsAdd, handleMessageSend, redirect, isLoading, isError, handleChatsReload} = this.props;

    if(isLoading){
      return (<div>Loading...</div>);
    }

    if(isError){
      return (<div>Error... Попробуйте получить чаты позднее. <button onClick={handleChatsReload}>Обновить чаты</button></div>);
    }

    return (
      <>
        <Typography className='messages-field' component="div">
          <ChatList redirect={redirect} addChat={handleChatsAdd} chats={chats}/>
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
