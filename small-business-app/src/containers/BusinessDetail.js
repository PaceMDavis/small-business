import { connect } from 'react-redux'
import BusinessDetail from '../components/BusinessDetail'

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

export default connect(mapStateToProps)(BusinessDetail)