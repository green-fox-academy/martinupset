import CommentsList from '../components/commentsList'
import {connect} from 'react-redux'
import getAllPostAction from '../redux/actions'

//包装ui组件成为容器组件
export default connect(
  (state)=>({CommentsListArr: state}),{getAllPostAction}
)(CommentsList)