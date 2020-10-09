import React from 'react';
import PropTypes from 'prop-types';

const PrintAge = props => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.dayOfBirth} {props.monthOfBirth} {props.yearOfBirth}</td>
            <td>{new Date().getFullYear() - props.yearOfBirth}</td>
        </tr>
    );
};

PrintAge.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    dayOfBirth: PropTypes.number,
    monthOfBirth: PropTypes.string,
    yearOfBirth: PropTypes.number.isRequired
};

PrintAge.defaultProps = {
    name: "Jan",
    surname: "Kowalski",
    dayOfBirth: 1,
    monthOfBirth: "January",
    yearOfBirth: 2000
};

export default PrintAge;