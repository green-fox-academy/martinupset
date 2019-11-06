//设置state的初始值
let commentsList = [
  {username: 'mate1', content: 'fk this promise1'},
  {username: 'adam', content: 'fk the js'}
]


function commentsReducer(state = commentsList, action){
  switch(action.type){

    case 'GET_POSTS_START':
    {
      return state
    }

    case 'GET_POSTS_SUCCESS':
      return [...action.posts.content]
      
    case 'addComment':
      //return state.unshift(actin.data)----->会返回数组的length

      // state.unshift(action.data) ---------------|这样写也不行：
      // return state------------------------------|原因是不能直接修改原来的state
      return [action.data, ...state]


    case 'delComment':
      let newState = [...state]
      newState.splice(action.data, 1)
      return newState
      
    default:
      return state

  }
}

export default commentsReducer