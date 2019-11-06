import {connect} from 'react-redux'
import CommentsItem from '../components/commentsItem'
import {delCommentAction} from '../redux/actions'

export default connect(
  state => ({}),
  {delCommentAction}
)(CommentsItem)