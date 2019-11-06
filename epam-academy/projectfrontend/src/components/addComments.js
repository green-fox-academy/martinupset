import React from 'react'

export default class AddComment extends React.Component{
  constructor(props){
    super(props)
  }

  handleAddComment = ()=>{
    //收集数据
    let username = this.refs.usernameDom.value
    let comment = this.refs.commentDom.value

    //验证数据是否合法：
    if(!username.trim() || !comment.trim()){
      alert('empty')
      return
    }

    //将数据交给app组件
    //this.props.add({username: username, content: comment})
    //分发action:
    this.props.addCommentAction({username: username, content: comment});


    //清空输入框
    this.refs.usernameDom.value = ''
    this.refs.commentDom.value = ''
  }

  render(){
    return(
      <div className = 'col-md-4'>
        <form className = 'form-horizontal'>

        <div className = 'form-group'>
          <label>username: </label>
          <textarea ref = 'usernameDom' className = 'form-control' rows = '2' placeholder = 'title'/>
          </div>

        <div className = 'form-group'>
          <label>comment: </label>
          <input ref = 'commentDom' type = 'text' className = 'form-control' placeholder = 'url'/>
        </div>

        <div className = 'form-group'>
          <div className = 'col-sm-offset-2 col-sm-10'>
            <button onClick = {this.handleAddComment} type = 'button' className = 'btn btn-default pull-right'>submit</button>
          </div>
          </div>
        </form>
        
      </div>
    )
  }
}