import { connect } from 'react-redux'
import Maps from '../components/Maps'
import { addMapLocations } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    mapLocations: state.mapLocations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMapLocations: (location) => dispatch(addMapLocations(location))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Maps)