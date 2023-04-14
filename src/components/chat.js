import React, { useState } from 'react';
import { connect } from "react-redux"
import { sendMessage as sendMessageToBot, userMessage as updateSystemOnUserMessageSubmit } from '../actions/daapi_ai';
import AudioRecorder from './audio-recorder';


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
        <h1>Jessie</h1>
        <div className="historyContainer">
          {chat.length === 0
            ? ""
            : chat.map((msg) => <div className={msg.type}>{msg.message}</div>)}
        </div>
        <div className="chatContainer">
            
            <input
                className="chatInput"
                id="chatBox"
                placeholder='Write a message..'
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleClick}
                value={message}>
            </input>
            <AudioRecorder />

        </div>
    </div> 
  );
  
}
const mapStateProperties = (state) => ({
  chat: state.daapiAi.messages
})
// ========================================

export default connect(mapStateProperties, { updateSystemOnUserMessageSubmit, sendMessageToBot})(Chat);