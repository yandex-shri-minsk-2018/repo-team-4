import React from 'react';
import './Header.css';
import '../ChatTitle/ChatName/ChatName'
import ChatTitle from "../ChatTitle/ChatTitle";


/*TODO Components:
button1,
button2,
ChatNameTitle,
LastVisit privateChat: visitTime; GroupChat: number of members
*/
class Header extends React.Component {


  render() {
    let headerClass = "header";

    return(
        <div className={headerClass}>
          <div className="button button-1">
            <i className="fa fa-arrow-left"></i>
          </div>
            <ChatTitle/>
          <div className="button button-2">
            <i className="fa fa-ellipsis-h"></i>
          </div>
        </div>
    );
  }
}

export default Header;