import { connect } from 'react-redux'
import Home from '../components/Home'
import { login, logout } from '../redux/actions'
import LogInForm from '../components/LogInForm'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login(true)),
    logout: () => dispatch(logout(false))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm, Home)