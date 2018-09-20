import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/visibility';
import Filter from '../components/Filter';

const mapStateToProps = state => ({ visibility: state.visibility || '' });

const mapDispatchToProps = dispatch => ({ 
    setFilter: filter => dispatch(setVisibilityFilter(filter)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

