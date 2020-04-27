import { connect } from 'react-redux'
import { login } from '../redux/actions'
import LogInForm from '../components/LogInForm'


const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
  }
}

export default connect(null, mapDispatchToProps)(LogInForm)