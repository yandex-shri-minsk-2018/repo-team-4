import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
    render() {
        return (
            <div className="listItem">
                <div className="listItem__leftInfo">
                    <div className="listItem__leftInfo__avatar">

                    </div>
                    <div className="listItem__leftInfo__userInfo">
                        <span className="listItem__leftInfo__userInfo__name">
                            {this.props.name}
                        </span>
                        <span className="listItem__leftInfo__userInfo__lastMessage">
                            {this.props.lastMessage}
                        </span>
                    </div>
                </div>

                <div className="listItem__newMessages">
                    <span className="listItem__newMessages__date">
                        {this.props.date}
                    </span>
                    {this.props.newMessages && this.props.date &&
                    <span className="listItem__newMessages__quantity">
                        {this.props.newMessages}
                    </span>
                    }
                </div>

            </div>
        );
    }
}

export default ListItem;
