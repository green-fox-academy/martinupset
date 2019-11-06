import {connect} from 'react-redux'
import {addCommentAction} from '../redux/actions'
import AddComment from '../components/addComments'

export default connect(
  state => ({}),
  {addCommentAction}
)(AddComment)