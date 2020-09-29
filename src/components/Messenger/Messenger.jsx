import React from "react";
import { MessageForm } from 'components/MessageForm';
import { Message } from "components/Message";
import {Header} from "components/Header";
import {ChatList} from "components/ChatList";
import { Container, Typography } from '@material-ui/core';

import './Messenger.scss';

export class Messenger extends React.Component {
  state = {
    messages: [
      { text: '123', author: 'qqqqq', isBot: false },
      { text: '12sgfdg3', author: 'Bot', isBot: true }
    ],
  };

  componentDidUpdate() {
    const { messages } = this.state;
    const lastMessage = messages[messages.length - 1];

    if (lastMessage.isBot) return;
    setTimeout(() => {
      this.addMessage({ text: `${lastMessage.author}, Roger that`, author: 'Robot'}, true);
    }, 1000);
  };

  addMessage = (state, isBot = false) => {
    const { text, author } = state;
    const { messages } = this.state;

    this.setState({messages: messages.concat({ text, author, isBot })});
  };

  render () {
    const { messages } = this.state;

    return (
      <Container className="container">
        <Header />
        <Typography className='messages-field' component="div">
          <ChatList />
          <div className='messages'>
            {
              messages.map((message, index) => <Message {...message} key={index}/>)
            }
          </div>
        </Typography>
        <MessageForm addMessage={this.addMessage}>Send</MessageForm>
      </Container>
    )
  }
}
