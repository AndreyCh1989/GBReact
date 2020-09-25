import React from "react";

export default class Message extends React.Component {
  render() {
    const { text, author } = this.props;
    return (
      <div>
        <h3 style={{padding: 0, margin: 0}}>{text}</h3>
        <h6 style={{padding: 0, margin: '0 0 5px 0'}}>{author}</h6>
      </div>
    )
  }
}
