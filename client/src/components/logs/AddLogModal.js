import React, { useState } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import { v4 as uuidv4 } from 'uuid';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLog, getLogs }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please fill-in Message and IT Staff' });
        } else {
            const newLog = {
                message,
                attention,
                tech,
                taskId: uuidv4().split('-').slice(0, 1).join(),
                date: new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Manila'
                })
            };

            addLog(newLog);

            M.toast({ html: `Log added by ${tech}` });

            //clear Fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
    };
    return (
        <div id="add-log-modal" className="modal modalStyle">
            <div className="modal-content">
                <h4>
                    Enter Task Log
                    <a href="#!" className="modal-close">
                        <i className="material-icons secondary-content grey-text">
                            close
                        </i>
                    </a>
                </h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            autoComplete="off"
                        />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={(e) => setTech(e.target.value)}
                        >
                            <option value="" disabled>
                                Select IT Staff
                            </option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in checkbox-grey"
                                    checked={attention}
                                    value={attention}
                                    onChange={(e) => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a
                    href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect blue lighten-1 btn"
                >
                    Save
                </a>
            </div>
        </div>
    );
};

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired
};

export default connect(null, { addLog })(AddLogModal);
