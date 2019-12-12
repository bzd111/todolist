import requests from "./api";

export const ADD_TODO = "add_todo";
export const DEL_TODO = "del_todo";
export const UP_TODO = "up_todo";
export const ALL_TODO = "all_todos";

export default function getAll() {
  return async dispatch => {
    const todos = await requests.get("todos/today").then(data => data);
    dispatch({
      type: ALL_TODO,
      todos
    });
  };
}

export function del(id) {
  return async dispatch => {
    await requests.del(`todos/${id}`).then(data => data);
    dispatch(getAll());
  };
}

export function update(content, id) {
  return async dispatch => {
    await requests.put(content, `todos/${id}/`).then(data => data);
    dispatch(getAll());
  };
}

export function add(data) {
  return async dispatch => {
    await requests.post(data, "todos");
    dispatch(getAll());
  };
}
