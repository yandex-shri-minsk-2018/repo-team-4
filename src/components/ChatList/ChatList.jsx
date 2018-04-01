import React from 'react';
import './ChatList.css';
import ListItem from "../ListItem/ListItem";
import { connect } from 'react-redux'
import { getRooms } from '../../reducers/chat/action';

class ChatList extends React.Component {

    componentDidMount() {
        this.props.getRooms();
    }

    render() {
        return(
            <div className={'chatList'}>
                {this.props.rooms.map((room, index) => (
                    <ListItem key={index}
                              sizeAvatar={"small"}
                              urlAvatar={'https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by'}
                              name={room.name}
                              lastMessage={"Моё последнее сообщение"}
                              newMessages={5}
                              date={"5 минут назад"}
                              roomId={room._id}
                    />
                ))}
            </div>
        );
    }
}

export default connect(
    state => ({
        rooms: state.chat.rooms
    }), {
        getRooms
    }
)(ChatList)
