import React, { useState } from 'react';
import { connect } from "react-redux"
import { sendMessage as sendMessageToBot, userMessage as updateSystemOnUserMessageSubmit } from '../actions/daapi_ai';

const Chat = ({ chat, updateSystemOnUserMessageSubmit, sendMessageToBot }) => {
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      console.log(message);
      updateSystemOnUserMessageSubmit(message);
      sendMessageToBot(message);
      setMessage("");
    }
  };


  return (
      <div className="chat">
        <h1> Bob</h1>
        <div className="historyContainer">
          {chat.length === 0
            ? ""
            : chat.map((msg) => <div className={msg.type}>{msg.message}</div>)}
        </div>
        <input
            className="pantera"
            id="chatBox"
            placeholder='Hello there! I am Bob and I work on your house. Ask me anything!'
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleClick}
            value={message}>

          </input>
      </div> 
  );
  
}
const mapStateProperties = (state) => ({
  chat: state.daapiAi.messages
})
// ========================================

export default connect(mapStateProperties, { updateSystemOnUserMessageSubmit, sendMessageToBot})(Chat);