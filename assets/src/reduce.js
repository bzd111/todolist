import { ADD_TODO, UP_TODO, DEL_TODO, ALL_TODO } from "./action";

const initState = {
  todos: []
};

export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case ALL_TODO:
      return { ...state, todos: action.todos };
    default:
      return state;
  }
}
