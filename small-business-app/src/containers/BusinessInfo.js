import { connect } from 'react-redux'
import BusinessInfo from '../components/BusinessInfo'
import { removeBusiness } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeBusiness: (index) => dispatch(removeBusiness(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessInfo)