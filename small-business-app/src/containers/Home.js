import { connect } from 'react-redux'
// import { addBusiness, removeBusiness } from '../redux/actions'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  return {
      businesses: state.businesses,
      isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Home)