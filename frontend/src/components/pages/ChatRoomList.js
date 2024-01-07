// ChatRoomList.js
import React from "react";
import "../styles/Chat.css";
import { useTheme } from '../../ThemeContext';

const ChatRoomList = () => {
    const { currentTheme, light, dark } = useTheme();
    const theme = currentTheme === 'light' ? light : dark;

    return (
        <div className="left-section" style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }}>
            <ul className="chat-room-list">
                <li className="chat-room-item">
                <span className="channel-icon" style={{ color: theme.color_text }}>🔒</span> {/* Placeholder icon or text */}
                    <span className="channel-name" style={{color: theme.color_text}}>Chat Room 1</span>
                </li>
                <li className="chat-room-item">
                <span className="channel-icon" style={{ color: theme.color_text }}>🔒</span> {/* Placeholder icon or text */}
                    <span className="channel-name" style={{color: theme.color_text}} >Chat Room 2</span>
                </li>
                <li className="chat-room-item">
                <span className="channel-icon" style={{ color: theme.color_text }}>🔒</span> {/* Placeholder icon or text */}
                    <span className="channel-name" style={{color: theme.color_text}} >Chat Room 2</span>
                </li>
            </ul>
        </div>
    );
};

export default ChatRoomList;

