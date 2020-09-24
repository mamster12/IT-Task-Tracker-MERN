import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentTech, clearCurrentTech } from '../../actions/techActions';
import { clearCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, setCurrentTech, clearCurrentTech, clearCurrent }) => {
    useEffect(() => {
        const options = {
            onCloseEnd: () => {
                clearCurrentTech();
                clearCurrent();
                console.log('Close End');
            }
        };
        const confirmDeleteModal = document.querySelectorAll(
            '#confirm-delete-modal'
        );
        M.Modal.init(confirmDeleteModal, options);
    });
    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <span>
                    <a
                        href="#confirm-delete-modal"
                        className="secondary-content modal-trigger"
                        onClick={(props) => setCurrentTech(tech)}
                    >
                        <i className="material-icons grey-text">delete</i>
                    </a>
                </span>
            </div>
        </li>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    setCurrentTech: PropTypes.func.isRequired,
    clearCurrentTech: PropTypes.func.isRequired,
    clearCurrent: PropTypes.func.isRequired
};

export default connect(null, {
    setCurrentTech,
    clearCurrentTech,
    clearCurrent
})(TechItem);
