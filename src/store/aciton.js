// import { ADD_COUNT, REMOVE_COUNT } from "./contant";
export const addAction=(num) => {
  return {type: 'ADD_COUNT', count: num}
}
export const removeAction=(num) => {
    return {type: 'REMOVE_COUNT', count: num}
}