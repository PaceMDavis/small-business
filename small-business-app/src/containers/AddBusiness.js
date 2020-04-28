import { connect } from 'react-redux'
import AddBusiness from '../components/AddBusiness'
// import { addBusiness, removeBusiness } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

export default connect(mapStateToProps)(AddBusiness)