import { INPUT_SUCCESS, AI_SUCCESS } from "./action_types";
import axios from "axios";

// On consumption of a user's request.
export const userMessage = (message) => async (dispatch) => {
    try {
      dispatch({ type: INPUT_SUCCESS, payload: message });
    } catch (err) {
        throw err
    }
};

// send message to the bot, to get a response back.
export const sendMessage = (message) => async (dispatch) => {
    try {
        const token = sessionStorage.getItem('LWA_DAAPI_TOKEN')
        if (token == null) {
            dispatch({
                type: AI_SUCCESS,
                payload: 'you need to log in first! This will not work otherwise.'
            })
            return;
        }
        const body = { user_input: message, daapi_token: token };
        //const res = 'bot received message' + message;
        const res = await axios.post("https://ai.andreasabdi.com/v1/ai_completions", body);
        dispatch({
            type: AI_SUCCESS,
            payload: res.data.response,
        });

    } catch (err) {
        throw err
    }
};

export const sendAudio = (audio) => async (dispatch) => {
    try {
        console.log("start sending")
        const formData = new FormData();
        formData.append("file", audio)
        const config = {
            headers: {'content-type': 'multipart/form-data'}
        }
        const res = await axios.post(
            "https://ai.andreasabdi.com/v1/audio_input", 
            formData, 
            config);
        console.log("finished sending")

        console.log(res.data)
        const sound = new Audio("data:audio/wav;base64," + res.data.audio_stream)
        sound.play();
        // Use this if API is sending direct audio_stream.
        // const audioBlob = new Blob([res.data], { type: 'audio/wav' });
        // const audioUrl = URL.createObjectURL(audioBlob);
        // const audioPlayer = new Audio(audioUrl)
        // audioPlayer.play();

        dispatch({
            type: INPUT_SUCCESS,
            payload: res.data.input,
        });
        dispatch({
            type: AI_SUCCESS,
            payload: res.data.response,
        });

    } catch (err) {
        throw err
    }
}