import React from "react";
import "./ChatSettingsHeader.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { goPrevLayout } from "../../reducers/navigation/action";

class ChatSettingsHeader extends React.Component {

    clickLeftButtonHandler = () => {
        this.props.goPrevLayout(this.props.prevLayout);
    };

    render() {
        return (
            <div className="chat-settings-header">
                <div className="chat-settings-header__button" onClick={() => this.clickLeftButtonHandler()}>
                    <i className='fa fa-arrow-left'/>
                </div>
                <h2>Настройки чата</h2>
                <div className="chat-settings-header__button">
                    <i className='fa'/>
                </div>
            </div>
        );
    }
}

ChatSettingsHeader.propTypes = {
    goPrevLayout: PropTypes.func,
    prevLayout: PropTypes.string
};
export default connect(
    () => ({}), {
        goPrevLayout
    }
)(ChatSettingsHeader);
