import React from "react";
import MessageForm from 'components/MessageForm';
import Message from "components/Message";

export default class Messenger extends React.Component {
  state = {
    messages: [{ text: '123', author: 'qqqqq'}],
    userMessage: false,
  };

  componentDidUpdate() {
    const { messages, userMessage } = this.state;

    if (!userMessage) return;
    setTimeout(() => {
      this.setState({messages: messages.concat({ text: 'Roger that', author: 'Robot'})});
    }, 1000);
    this.setState({userMessage: false});
  };

  addMessage = (state) => {
    const { text, author } = state;
    const { messages } = this.state;

    this.setState({messages: messages.concat({ text, author })});
    this.setState({userMessage: true});
  };

  render () {
    const { messages } = this.state;

    return (
      <>
        <div style={{margin: '0 0 20px 0'}}>
          {
            messages.map((message, index) => <Message {...message} key={index}/>)
          }
        </div>
        <MessageForm addMessage={this.addMessage}>Send</MessageForm>
      </>
    )
  }
}
