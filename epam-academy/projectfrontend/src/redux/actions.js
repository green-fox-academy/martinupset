//数据源在哪，操作数据的方法在哪
//aaction是唯一数据源的地方

export const addCommentAction = (commentObj)=> ({type: 'addComment', data: commentObj})

export const delCommentAction = (index) =>({type: 'delComment', data: index})

export default function getAllPostAction(){
  return async (dispatch) =>{
    dispatch({type : 'GET_POSTS_START'})

    let fetchResult = await fetch('http://localhost:3001/api/post', {
      headers: {'Content-type' : 'application/json'}
    })

    let posts = await fetchResult.json()

    console.log('all post', posts)

    dispatch({
      type: 'GET_POSTS_SUCCESS',
      posts
    })
  }
}