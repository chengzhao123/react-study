import { ADD_COUNT, REMOVE_COUNT } from "./contant";
export const addAction=(info) => {
  return {type: ADD_COUNT, payload: info}
}
export const removeAction=(info) => {
    return {type: REMOVE_COUNT, payload: info}
}