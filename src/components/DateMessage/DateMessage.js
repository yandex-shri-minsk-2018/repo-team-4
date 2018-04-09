import React, {Component} from "react";
import "./dataMessage.css";
import PropTypes from "prop-types";


class DateMessage extends Component {
    render() {
        return (
            <div className='balloon__data-message' date-message=''>
                <span className='data-message'>
                    {this.props.dateMessage}
                </span>
                <span className='data-message'></span>
            </div>
        );
    }
}
DateMessage.propTypes = {
    dateMessage: PropTypes.string
};
export default DateMessage;
