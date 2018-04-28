import React, {Component} from "react";
import "./Spinner.css";

class Spinner extends Component {

    render() {
        return (
            <div className="spinnerContainer">
                <div className="spinner"></div>
            </div>
        );
    }
}

export default Spinner;
