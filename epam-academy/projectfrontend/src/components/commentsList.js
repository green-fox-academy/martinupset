import React from 'react'
import CommentItem from '../containers/CommentsItem'

export default class CommentsList extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.getAllPostAction()
  }

  render(){
    let {CommentsListArr} = this.props
    let display = CommentsListArr.length? 'none': 'block'
    return(
      <div className = 'col-md-8'>
        <h3 className = 'reply'>reply:</h3>
        <h2 className = {display}>no comments, click left side</h2>
        <ul className = 'list-group'>
            {
              CommentsListArr.map((item,index) =>{
                //key这个属性没有办法在props中拿到，所以我们用一个变量将index也接收
                return<CommentItem key={index} commentsItem ={item} index = {index} del = {this.props.del}/>
              })
            }
         
          </ul>
        
        
      </div>
    )
  }
}