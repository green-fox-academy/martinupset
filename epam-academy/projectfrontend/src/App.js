import React, {Component} from 'react'
import AddComment from './containers/AddComments'
import CommentsList from './containers/CommentsList'

import './App.css'

class App extends Component{
  //初始化评论内容的数据
  state = {
    commentsArr: [
      {username: 'mate', content: 'fk this promise'},
      {username: 'adam', content: 'fk the js'}
    ]
  }
  constructor(props){
    super(props)
  }

  add = (commentObj)=>{
    let commentsArr = [commentObj, ...this.state.commentsArr]
    this.setState({
      commentsArr
    })
  }

  del = (index) =>{
    console.log(index)
    let {commentsArr} = this.state
    //截取方法会返回截取的数组并生成新的被截取后的数组
    commentsArr.splice(index,1)
    this.setState({
      commentsArr
    })
  }

  render(){
    return(<div className='container'>
      <h1>app</h1>
      <AddComment add={this.add}/>
      <CommentsList del = {this.del} commentsArr = {this.state.commentsArr}/>
    </div>)
  }
}


export default App;
