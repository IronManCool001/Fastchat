import React,{useEffect, useState} from 'react';
import {Avatar} from '@material-ui/core'
import './SidebarChat.css';

function SidebarChat({ addNewChat }){
    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt('Enter room name for chat:');
        if (roomName){
            //do something with database
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>Room Name</h2>
                <p>Last message ...</p>
            </div>
        </div>
    ) :(
        <div onClick={createChat} className="sidebarChat">
            <h1>Add New Chat</h1>
        </div>
    )
}

export default SidebarChat