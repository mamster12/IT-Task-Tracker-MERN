import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrent, clearCurrent, getLogs } from '../../actions/logActions';
import { clearCurrentTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';
// import M from 'materialize-css/dist/js/materialize.min.js';
// import EditLogModal from './EditLogModal';

const LogItem = ({
    log,
    setCurrent,
    clearCurrent,
    clearCurrentTech,
    getLogs
}) => {
    // const instance = M.Modal.getInstance(<EditLogModal />);
    // const onModalHide = () => {
    //     alert('Modal closed!');
    // };

    // instance.openModal({
    //     complete: onModalHide
    // });
    useEffect(() => {
        const options = {
            onCloseEnd: () => {
                getLogs();
                clearCurrent();
                clearCurrentTech();
                console.log('Close End');
            }
        };

        const options2 = {
            onCloseEnd: () => {
                getLogs();
                console.log('Close End');
            }
        };
        const confirmDeleteModal = document.querySelectorAll(
            '#confirm-delete-modal'
        );
        const editLogModal = document.querySelectorAll('#edit-log-modal');
        const addLogModal = document.querySelectorAll('#add-log-modal');
        M.Modal.init(confirmDeleteModal, options);
        M.Modal.init(editLogModal, options);
        M.Modal.init(addLogModal, options2);
    });

    return (
        <li className="collection-item">
            <div>
                <a
                    href="#edit-log-modal"
                    className={`modal-trigger ${
                        log.attention ? 'red-text' : 'blue-text'
                    }`}
                    onClick={(props) => setCurrent(log)}
                >
                    {' '}
                    <strong>{log.message}</strong>
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.taskId} </span>
                    last updated by{' '}
                    <span className="black-text">{log.tech}</span> on{' '}
                    <Moment format="MMM Do YYYY, hh:mm:ss a">{log.date}</Moment>
                </span>
                <a
                    href="#confirm-delete-modal"
                    className="secondary-content modal-trigger"
                    onClick={(props) => setCurrent(log)}
                >
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired,
    clearCurrent: PropTypes.func.isRequired,
    clearCurrentTech: PropTypes.func.isRequired,
    getLogs: PropTypes.func.isRequired
};

export default connect(null, {
    setCurrent,
    clearCurrent,
    clearCurrentTech,
    getLogs
})(LogItem);
