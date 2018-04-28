import React, {Component} from "react";
import "./Profile.css";
import {connect} from "react-redux";
import {goPrevLayout} from "../../reducers/navigation/action";

class ProfileHeader extends Component {

    clickGoBackButtonHandler() {
        this.props.goPrevLayout(this.props.prevLayout);
    }

    render() {
        return (
            <div className="header">
                <div className="button button-1" onClick={this.clickGoBackButtonHandler.bind(this)}>
                    <i className="fa fa-arrow-left"></i>
                </div>
                <h2>Профиль</h2>
                <div className="button button-2">
                    <i className="fa fa-ellipsis-h"></i>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        layout: state.navigation.layout,
    }), {
        goPrevLayout
    }
)(ProfileHeader);
