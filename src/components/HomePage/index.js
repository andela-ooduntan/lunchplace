import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Homepage from './Home';
import { getPlaces } from '../../actions/placesAction';

const mapDispatchToProps = (dispatch) => {
  return {
    getPlaces: bindActionCreators(getPlaces, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    places: state.places,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
