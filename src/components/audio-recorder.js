import React from 'react';
import { useReactMediaRecorder } from "react-media-recorder";

import { connect } from "react-redux"
import { sendAudio } from '../actions/daapi_ai';

const AudioRecorder = ({chat, sendAudio}) => {

    const onStopRecording = (blobUrl, blob) => {
        console.log("finished recording")
        console.log(blobUrl)
        sendAudio(blob)
    }

    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ video: false, audio: true, onStop: onStopRecording });

    return (
        <div className="audioRecorder">
            <button className="record"
                onMouseDown={startRecording}
                onMouseUp={stopRecording}>
                <div class="button-textbox">
                    <h2>VOICE</h2>
                </div>
            </button>
        </div> 
    );
  
}
const mapStateProperties = (state) => ({
  chat: state.daapiAi.messages
})
// ========================================

export default connect(mapStateProperties, { sendAudio })(AudioRecorder);