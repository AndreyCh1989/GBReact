import React from "react";
import classNames from 'classnames';
import { Paper } from '@material-ui/core';

import './Message.scss';

export class Message extends React.Component {
  render() {
    const { text, author, isBot } = this.props;
    const classes = classNames(
      'message', {
        'user': !isBot
      }
    );

    return (
      <Paper className={classes}>
        <h3 className='text'>{text}</h3>
        <h6 className='author'>{author}</h6>
      </Paper>
    )
  }
}
