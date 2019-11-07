//数据源在哪，操作数据的方法在哪
//aaction是唯一数据源的地方

export const addCommentAction1 = (commentObj)=> ({type: 'addComment', data: commentObj})

export const delCommentAction = (index) =>({type: 'delComment', data: index})

export const getAllPostAction = () =>{
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

export const addCommentAction = (post) =>{
  return async (dispatch) =>{
    dispatch({type: 'SUBMIT_POST_START'})

    let result = await fetch ('http://localhost:3001/api/post',{
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(post)
      //JSON.stringify：把一个JS的对象搞成一个json, JSON.parse:把一个JSON搞成一个js对象
    })
    let data = await result.json()

    dispatch({
      type: 'addComment',
      data
    })
  }

}

export const deleteIem = (index) =>{
  return async (dispatch) =>{
    dispatch ({type: 'DELETE_POST_START'})

    let result = await fetch ('http://localhost:3001/api/post',{
      method: 'DELETE',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(index)
    })
    let data = await result.json()

    dispatch({
      type: 'delcomment',
      data: index
    })
  }
}