import {
    UPDATE_THOUGHT,
    ADD_THOUGHT,
    REMOVE_THOUGHT,
  } from "./actions";
  
  const initialState = {
    thoughts: []
  };
  
  export const reducers = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_THOUGHT:
        return {
          ...state,
          thoughts: state.thoughts.map(thought => {
            if (action._id === thought._id) {
              thought.thoughtText = action.thoughtText
            }
            return thought
          })
        };
  
      case ADD_THOUGHT:
        return {
          ...state,
          thoughts: [...state.thoughts, action.thought],
        };
  
      
  
      
  
      case REMOVE_THOUGHT:
        return {
          ...state,
          thoughts: state.thoughts.filter(thought => {
            return thought._id !== action._id;
          }),
        };
  
  
      default:
        return state;
    }
  };
  
  export default reducers;