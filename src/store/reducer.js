import { ADD_COUNT, REMOVE_COUNT } from "./contant";
//定义一个初始状态
let initialState = {
  bookList: []
}
//利用reducer将store和action串联起来
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return {
        bookList: [...state.bookList, action.payload]
      }
    case REMOVE_COUNT:
      return {
        bookList: state.bookList.filter(item => {
          return item.bookName !== action.payload.bookName
        })
      }
    default:
      return state
  }
}
export default reducer
