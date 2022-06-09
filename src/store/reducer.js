import { ADD_COUNT, REMOVE_COUNT } from "./contant";
//定义一个初始状态
let initialState = {
  count: 100
}
//利用reducer将store和action串联起来
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return {
        count: state.count + action.count
      }
    case REMOVE_COUNT:
      return {
        count: state.count - action.count
      }
    default:
      return state
  }
}
export default reducer
