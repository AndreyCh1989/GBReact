import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import {chats} from '../../data/chats';
import {Link} from 'react-router-dom';
import {Button, TextField} from "@material-ui/core";
import {nanoid} from "nanoid";

export class ChatList extends React.Component {
  state = {
    name: '',
  };

  changeName = (event) => {
    const name = event.target.value;
    this.setState({name});
  };

  onSubmit = () => {
    const {addChat} = this.props;
    addChat(this.state);
  };

  render() {
    const {chats} = this.props;
    const {name} = this.state;

    return (
      <div>
        <List component="nav" aria-label="main mailbox folders">
          {
            chats.map((chat) => (
              <ListItem key={chat.id} component={Link} to={`/chats/${chat.id}`}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
              </ListItem>
            ))
          }
        </List>
        <TextField
          label="New chat"
          type="text"
          placeholder="New chat"
          name='name'
          value={name}
          onChange={this.changeName}/>
        <Button
          className='send'
          variant="contained"
          color="primary"
          onClick={this.onSubmit}
        >
          Add
        </Button>
      </div>
    );
  }
}
