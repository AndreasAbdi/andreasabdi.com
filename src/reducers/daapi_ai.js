import { INPUT_SUCCESS, AI_SUCCESS, CODE_SUCCESS } from "../actions/action_types";
// Initial state
const initialState = {
    messages: [],
};
  
  // Switch statement - update state
const daapiAi = (state = initialState, action) => {
    const { type, payload } = action;
    let { messages } = state;
  
    switch (type) {
        case INPUT_SUCCESS:
            messages = [...messages, { message: payload, type: "USER"}]
            return {
                ...state,
                messages
            }
        case AI_SUCCESS:
            messages = [...messages, { message: payload, type: "AI"}]
            return {
                ...state,
                messages
            }
        case CODE_SUCCESS:
            messages = [...messages, { message: payload, type: "CODE"}]
            return {
                ...state,
                messages
            }
      default:
        return {
          ...state,
        };
    }
};

export default daapiAi