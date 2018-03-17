import React, { Component } from 'react';
import './listItem.css';

class ListItem extends Component {
    render() {
        return (
            <div className="listItem">
                <div className="listItem__leftInfo">
                    <div className="listItem__leftInfo__avatar">

                    </div>
                    <div className="listItem__leftInfo__userInfo">
                        <span className="listItem__leftInfo__userInfo__name">
                            Vladimir Zubritskiy
                        </span>
                        <span className="listItem__leftInfo__userInfo__lastActivity">
                            1 day ago
                        </span>
                    </div>
                </div>
                <div className="listItem__newMessage">
                    <span className="listItem__newMessage__quantity">
                        1
                    </span>
                </div>
            </div>
        );
    }
}

export default ListItem;
