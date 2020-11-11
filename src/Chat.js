import React, {useEffect,useState} from 'react';
import {Avatar} from '@material-ui/core';
import './Chat.css';
import {IconButton} from '@material-ui/core';
import {AttachFile, MoreVert,SearchOutlined} from '@material-ui/icons';
function Chat(){
    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <h3>Last seen at ...</h3>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_message">
                <span className="chat_name">Dev</span>
                Hey React

                <span className="chat_timestap">
                    12:00 pm
                </span>
                </p>
            </div>
            <div className="chat_footer"></div>
        </div>
    )
}

export default Chat;