import React, { Component } from 'react';
import SendMessage from '../SendMessage/SendMessage';
import './Profile.css';

const IconBack = () => (
  <svg x="0px" y="0px"
    viewBox="0 0 477.175 477.175">
  <g>
   <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
     c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
    </g>
  </svg>

   );
const IconOut = () => (
  <svg version="1.1" id="Capa_1"  x="0px" y="0px"
  	 width="25px" height="25px" viewBox="0 0 481.781 481.781">
  <g>
  	<g>
  		<path d="M351.596,433.266H23.318V48.515h328.277c6.438,0,11.658-5.221,11.658-11.66c0-6.438-5.223-11.658-11.658-11.658H11.66
  			C5.221,25.197,0,30.418,0,36.855v408.069c0,6.438,5.221,11.66,11.66,11.66h339.936c6.438,0,11.658-5.223,11.658-11.66
  			S358.033,433.266,351.596,433.266z"/>
  		<path d="M478.365,225.474l-71.891-71.902c-4.555-4.555-11.932-4.555-16.486,0c-4.555,4.549-4.555,11.932,0,16.486l51.988,52
  			h-217.87c-6.438,0-11.658,5.221-11.658,11.658c0,6.439,5.221,11.66,11.658,11.66h217.87l-51.988,51.986
  			c-4.555,4.555-4.555,11.934,0,16.487c2.277,2.275,5.26,3.414,8.244,3.414c2.982,0,5.965-1.139,8.242-3.414l71.891-71.891
  			C482.92,237.406,482.92,230.027,478.365,225.474z"/>
  	</g>
  </g>
  </svg>
);
class ProfileHeader extends Component {
  render() {
    let headerClass = "Profile__header";

    return (
      <div className={headerClass}>
        <div className="Profile__button button-1">
          <IconBack />
        </div>
        <h1 className='Profile__header-h1'>Профиль</h1>
        <div className="Profile__button button-2">
          <IconOut />
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
