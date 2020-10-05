import React from "react";
import {nanoid} from 'nanoid';
import { MessageForm } from 'components/MessageForm';
import { Message } from "components/Message";
import {ChatList} from "components/ChatList";
import { Typography } from '@material-ui/core';

import {chats} from '../../data/chats';

import './Messenger.scss';

export class Messenger extends React.Component {
  state = {
    chats
  };

  componentDidUpdate() {
    const messages = this.getMessages();
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage || lastMessage.isBot) return;
    setTimeout(() => {
      this.addMessage({ text: `${lastMessage.author}, Roger that`, author: 'Robot'}, true);
    }, 1000);
  };

  getMessages = () => {
    const {match} = this.props;
    const {chats} = this.state;

    const chat = chats.find(c => String(c.id) === String(match.params.id));
    if (chat && chat.messages) {
      return chat.messages;
    } else {
      return [];
    }
  };

  addMessage = (state, isBot = false) => {
    const { text, author } = state;
    const {match} = this.props;
    const {chats} = this.state;
    const chat = chats.find(c => String(c.id) === String(match.params.id));

    const messages = this.getMessages();
    chat.messages = messages.concat({ text, author, isBot });

    this.setState({chats});
  };

  addChat = (state) => {
    const { name } = state;
    const {chats} = this.state;
    const newChats = chats.concat(
      {
        id: nanoid(),
        name: name,
        messages: []
      }
    );

    this.setState({chats: newChats});
    console.log(newChats);
  };

  render () {
    const messages = this.getMessages();

    return (
      <>
        <Typography className='messages-field' component="div">
          <ChatList addChat={this.addChat} chats={this.state.chats}/>
          <div className='messages'>
            {
              messages.map((message, index) => <Message {...message} key={index}/>)
            }
          </div>
        </Typography>
        <MessageForm addMessage={this.addMessage}>Send</MessageForm>
      </>
    )
  }
}
