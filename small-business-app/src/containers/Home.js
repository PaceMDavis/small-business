import { connect } from 'react-redux'
// import { addBusiness, removeBusiness } from '../redux/actions'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  return {
      businesses: state.businesses
  }
}

export default connect(mapStateToProps)(Home)