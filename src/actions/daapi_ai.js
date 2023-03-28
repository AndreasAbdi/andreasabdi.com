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
            throw new Error('you need to log in first!')
        }
        const body = { user_input: message, daapi_token: token };
        // TODO: add the daapi_tokenization for LWA invocations.
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