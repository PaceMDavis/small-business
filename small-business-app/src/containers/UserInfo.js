import { connect } from 'react-redux'
import UserInfo from '../components/UserInfo'

const mapStateToProps = (state) => {
  return {
      isLoggedIn: state.isLoggedIn,
      user: state.user
  }
}


export default connect(mapStateToProps)(UserInfo)