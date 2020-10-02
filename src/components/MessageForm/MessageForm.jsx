import React from "react";
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import './MessageForm.scss';

export class MessageForm extends React.Component {
  state = {
    text: '',
    author: ''
  };

  changeParam = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value});
  };

  onSubmit = () => {
    const { text, author } = this.state;
    const { addMessage } = this.props;

    if(!text){
      alert('Please type a message');
      return;
    }

    if(!author){
      alert('Please type your name');
      return;
    }

    if(typeof addMessage === 'function'){
      addMessage(this.state);
      this.setState({text: ''});
    }
  };

  render () {
    const { text, author} = this.state;

    return (
      <div className='message-form'>
        <TextField
          required
          label="Автор"
          type="text"
          placeholder="Автор"
          name='author'
          value={author}
          onChange={this.changeParam}/>
        <br/>
        <TextField
          name='text'
          placeholder="Сообщение"
          value={text}
          onChange={this.changeParam}
          label="Сообщение"
          multiline
          rows={4}
          variant="outlined"
        />
        <br/>
        <Button
          className='send'
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          onClick={this.onSubmit}
        >
          Send
        </Button>
      </div>
    )
  }
}
