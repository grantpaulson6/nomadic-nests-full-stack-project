import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logoutCurrentUser} from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logoutCurrentUser: () => dispatch(logoutCurrentUser()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);