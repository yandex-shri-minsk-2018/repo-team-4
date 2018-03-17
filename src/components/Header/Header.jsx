import React from 'react';

class Header extends React.Component {


  render() {
    let headerClass = "header";

    return(
        <div className={headerClass}>
          <div className="button-1">
            <i className="fa fa-arrow-left"></i>
          </div>
          <div>
            <h2>User Name</h2>
            <span>Last visit</span>
          </div>
          <div className="button-2">
            <i className="fa fa-ellipsis-h"></i>
          </div>
        </div>
    );
  }
}

export default Header;