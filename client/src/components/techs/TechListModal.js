import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>
                    IT Staff
                    <a href="#!" className="modal-close">
                        <i className="material-icons secondary-content grey-text">
                            close
                        </i>
                    </a>
                </h4>
                <ul className="collection">
                    {!loading &&
                        techs !== null &&
                        techs.map((tech) => (
                            <TechItem key={tech._id} tech={tech} />
                        ))}
                </ul>
            </div>
        </div>
    );
};

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
