import React from 'react';
import './HeaderTemplate.css';
import '../ChatTitle/ChatName/ChatName'

class HeaderTemplate extends React.Component {


  render() {
    let HeaderTemplateClass = "HeaderTemplate";

    return(
        <div className={HeaderTemplateClass}>
          <div className="button button-1">
            <i className={this.props.leftButtonClass}></i>
          </div>
          <h2>{this.props.title}</h2>
          <div className="button button-2">
            <i className={this.props.rightButtonClass}></i>
          </div>
        </div>
    );
  }
}

export default HeaderTemplate;
