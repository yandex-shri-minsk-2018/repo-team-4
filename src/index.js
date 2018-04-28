import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers/index";
import "./index.css";

import App from "./components/App/App";
import thunk from "redux-thunk";

const middleware = [
    thunk
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
));


//import api from './api';
//
// Example of usage API
//
//(async () => {
//    //
//    // Events
//    //
//
//    // On status of user is changed
//    await api.onUserChangeStatus((result) => {
//        console.log('Change status: ', result);
//    });
//
//    // On user is joined to room
//    await api.onUserJoinedRoom((result) => {
//        console.log('User joined room: ', result);
//    });
//
//    // On user is joined to room
//    await api.onUserLeavedRoom((result) => {
//        console.log('User leaved room: ', result);
//    });
//
//    // On user is joined to room
//    await api.onMessage((result) => {
//        console.log('New message: ', result);
//    });
//
//    //
//    // Actions
//    //
//
//    // Fetch current user
//    let user = await api.getCurrentUser();
//    console.log('Current user', user);
//
//    // Fetch user information
//    console.log('User information', await api.getUser(user._id));
//
//    // Get users
//    let users = await api.getUsers({limit: 100});
//    console.log('List of all users', users);
//
//    // We have more users
//    if (users.next) {
//        console.log('More users', await api.getUsers(users.next));
//    }
//
//    // Create room
//    try {
//        console.log('New room created', await api.createRoom({name: 'Test'}));
//    } catch (err) {
//        console.log(err.message);
//    }
//
//    // Get list of all rooms
//    let rooms = await api.getRooms();
//    console.log('All rooms', rooms);
//
//    console.log('Get room info', await api.getRoom(rooms.items[0]._id));
//
//    // Try to join to first room in list
//    console.log('Join current user to room', await api.currentUserJoinRoom(rooms.items[0]._id));
//
//    // Try to join to first room in list
//    console.log('Join some user to room', await api.userJoinRoom(users.items[0]._id, rooms.items[0]._id));
//
//    // Get current user list of rooms
//    console.log('Current user rooms: ', await api.getCurrentUserRooms());
//
//    // Send message to room
//    console.log('Send message', await api.sendMessage(rooms.items[0]._id, `Test message ${Date.now()}`));
//
//    // Send message to room
//    console.log('Room messages', await api.getRoomMessages(rooms.items[0]._id));
//
//    // Leave room
//    console.log('Leave current user to room', await api.currentUserLeaveRoom(rooms.items[0]._id));
//
//    console.log(api);
//})();


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"));
