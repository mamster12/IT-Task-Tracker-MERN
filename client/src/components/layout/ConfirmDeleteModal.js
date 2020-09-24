import React from 'react';
import { connect } from 'react-redux';
import { deleteLog, clearCurrent } from '../../actions/logActions';
import { deleteTech, clearCurrentTech } from '../../actions/techActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const ConfirmDeleteModal = ({
    currentLog,
    currentTech,
    deleteLog,
    deleteTech,
    clearCurrent,
    clearCurrentTech
}) => {
    const onDelete = () => {
        if (currentLog) {
            deleteLog(currentLog._id);
            M.toast({ html: 'Log Deleted' });
        }

        if (currentTech) {
            deleteTech(currentTech._id);
            M.toast({ html: 'Staff has been deleted' });
        }
    };

    const onCancel = () => {
        clearCurrent();
        clearCurrentTech();
    };
    return (
        //   <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
        <div id="confirm-delete-modal" className="modal modalStyleSmall">
            <div className="modal-content">
                <h6>Are you sure to DELETE?</h6>
            </div>
            <div className="modal-footer">
                <a
                    href="#!"
                    className="modal-close waves-effect red accent-1 btn"
                    onClick={onDelete}
                >
                    Confirm
                </a>{' '}
                <a
                    href="#!"
                    className="modal-close waves-effect grey darken-1 btn"
                    onClick={onCancel}
                >
                    Cancel
                </a>
            </div>
        </div>
    );
};

// AddLogModal.propTypes = {
//     addLog: PropTypes.func.isRequired
// };

ConfirmDeleteModal.propTypes = {
    currentLog: PropTypes.object,
    currentTech: PropTypes.object,
    deleteLog: PropTypes.func.isRequired,
    deleteTech: PropTypes.func.isRequired,
    clearCurrent: PropTypes.func.isRequired,
    clearCurrentTech: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    currentLog: state.log.current,
    currentTech: state.tech.current
});

export default connect(mapStateToProps, {
    deleteLog,
    clearCurrent,
    deleteTech,
    clearCurrentTech
})(ConfirmDeleteModal);
