import React from "react";

export default class MessageForm extends React.Component {
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
      <>
        <input type="text" placeholder="Автор" name='author' value={author} onChange={this.changeParam}/><br/>
        <textarea name='text' placeholder="Сообщение" value={text} onChange={this.changeParam}/><br/>
        <button onClick={this.onSubmit}>Send</button>
      </>
    )
  }
}
