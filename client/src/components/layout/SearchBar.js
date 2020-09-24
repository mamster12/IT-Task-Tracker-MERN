import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
    const text = useRef('');

    // const onChange = (e) => {
    //     searchLogs(text.current.value);
    //     console.log(text.current.value);
    // };

    const onChange = (e) => {
        if (text.current.value !== null) {
            searchLogs(e.target.value);
        }
    };

    return (
        <nav>
            <div className="nav-wrapper blue">
                <form>
                    <div className="input-field black-text">
                        <input
                            id="search"
                            type="search"
                            placeholder="Search Logs.."
                            ref={text}
                            onChange={onChange}
                            autoComplete="off"
                        />
                        <label className="label-icon" htmlFor="search">
                            <i className="material-icons">search</i>
                        </label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    );
};

SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);
