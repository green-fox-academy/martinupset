import React from 'react'

export default class CommentsItem extends React.Component{
  constructor(props){
    super(props)
  }

  handleDelComment = () =>{
    //获取标识的数据index
    if(window.confirm(`u sure to delete ${this.props.commentsItem.username}'s comment`))
    // {this.props.del(this.props.index)}
    this.props.delCommentAction(this.props.index)
  }

  render(){
    let {commentsItem} = this.props
    return(
      
        <li className = 'list-group-item'>
          <button onClick = {this.handleDelComment}>delete</button>
          <p className = 'user'><span >{commentsItem.username}</span><span>say:</span></p>
          <p className = 'centence'>{commentsItem.content}</p>
          </li>
    )
  }
}