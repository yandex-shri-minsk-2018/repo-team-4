import React, {Component} from "react";
import DateMessage from "../DateMessage/DateMessage";
import "./Balloon.css";
import PropTypes from "prop-types";

class Balloon extends Component {
    render() {
        let style = this.props.typeMessage ? "styleballoon" : " ";
        let currentTime = new Date();

        let dateMessage;
        if ((currentTime - this.props.dateMessage) < (1000 * 60)) {
            dateMessage = "Только что";
        }
        else if ((currentTime - this.props.dateMessage) < (5000 * 60)) {
            dateMessage = "Минуту назад";
        }
        else if ((currentTime - this.props.dateMessage) < (7000 * 60)) {
            dateMessage = "5 минут назад";
        }
        else {
            let messageDate = new Date(this.props.dateMessage);
            let day = messageDate.getDate() < 10 ? "0" + messageDate.getDate() : messageDate.getDate();
            let month = messageDate.getMonth();
            month++;
            month = month < 10 ? "0" + month : month;
            let hour = messageDate.getHours() < 10 ? "0" + messageDate.getHours() : messageDate.getHours();
            let minutes = messageDate.getMinutes() < 10 ? "0" + messageDate.getMinutes() : messageDate.getMinutes();
            let seconds = messageDate.getSeconds() < 10 ? "0" + messageDate.getSeconds() : messageDate.getSeconds();

            let fullDate = (day + "." + month + " " + hour + ":" + minutes + ":" + seconds);
            dateMessage = fullDate;
        }
        return (
            <div className={"balloon " + style}>
                <span className='mess-author'>{this.props.message.user && this.props.message.user.name}</span>
                <div className='balloon__content' message=''>
                    {this.props.message.message}
                </div>
                <DateMessage dateMessage={dateMessage}/>
            </div>
        );
    }
}
Balloon.propTypes = {
    typeMessage: PropTypes.bool,
    dateMessage: PropTypes.number,
    message: PropTypes.string
};
export default Balloon;
