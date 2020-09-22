import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Message = ({message}) => {
  return <div>{message}</div>;
};

const Chat = () => {
  const [messages, setMessages] = useState(['1', '2']);
  const [newMessage, setNewMessage] = useState('');

  const addMessage = () => {
    if (!newMessage) return;
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  const messageChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <>
      {
        messages.map((message, index) => (
          <Message message={message} key={index}/>
        ))
      }
      <input value={newMessage} onChange={messageChange}/>
      <button onClick={addMessage}>Add</button>
    </>
  );
};

ReactDOM.render(
   <Chat />,
   document.getElementById('root'),
);
