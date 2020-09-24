import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';
import selectLogs from '../../selectors/logs';

const Logs = ({ log: { logs, loading }, getLogs }) => {
    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, []);

    if (loading || logs === null) {
        return (
            <div className="container">
                <div className="margin-top-five center">
                    <Preloader />
                </div>
            </div>
        );
    }

    return (
        <ul className="collection width-header gradient-1 z-depth-1">
            <li className="collection-header">
                <h4 className="center-align white-text h-text">
                    IT TASK TRACKER
                </h4>
            </li>
            <div>
                {/* <span className="legend">
                    
                </span>

                <span className="legend right">
                   
                </span> */}
                <div className="row container legend-container">
                    <div className="col s6">
                        {' '}
                        <i className="material-icons red-text blue-icon">
                            stop
                        </i>{' '}
                        NEED ATTENTION Search: "true"
                    </div>
                    <div className="col s6">
                        <i className="material-icons blue-text blue-icon">
                            stop
                        </i>{' '}
                        FINISHED Search: "false"
                    </div>
                </div>
            </div>
            {!loading && logs.length === 0 ? (
                <h6 className="center">No Logs to show...</h6>
            ) : (
                logs.map((log) => <LogItem key={log._id} log={log} />)
            )}
        </ul>
    );
};

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    log: {
        ...state.log,
        logs: selectLogs(state.log)
    }
});

export default connect(mapStateToProps, { getLogs })(Logs);
