import React from 'react';
import './ChatList.css';
import ListItem from "../ListItem/ListItem";

class ChatList extends React.Component {

  render() {
    return(
        <div className={'chatList'}>
          <ListItem
              sizeAvatar={"small"}
              urlAvatar={'https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by'}
              name={"Имя Фамилия"}
              lastMessage={"Моё последнее сообщение"}
              newMessages={5}
              date={"5 минут назад"}
          />
          <ListItem
              sizeAvatar={"small"}
              urlAvatar={'https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by'}
              name={"Имя Фамилия"}
              lastMessage={"Моё последнее сообщение"}
              newMessages={5}
              date={"5 минут назад"}
          />
          <ListItem
              sizeAvatar={"small"}
              urlAvatar={'https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by'}
              name={"Имя Фамилия"}
              lastMessage={"Моё последнее сообщение"}
              newMessages={5}
              date={"5 минут назад"}
          />
          <ListItem
              sizeAvatar={"small"}
              urlAvatar={'https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by'}
              name={"Имя Фамилия"}
              lastMessage={"Моё последнее сообщение"}
              newMessages={5}
              date={"5 минут назад"}
          />
        </div>
    );
  }
}

export default ChatList;