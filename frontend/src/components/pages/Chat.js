import React from "react";
import "../styles/Chat.css";
import { useTheme } from "../../ThemeContext";
import Navbar from "./Navbar";
import ChatRoomList from "./ChatRoomList";
import CurrentChat from "./CurrentChat";

const Chat = () => {
    const { currentTheme, light, dark } = useTheme();
    const theme = currentTheme === 'light' ? light : dark;

    return (
        <div className="container-chat">
            <Navbar /> 
            <div className="container-chat-content" style={{color: theme.color_surface_100}}>
                <ChatRoomList />
                <CurrentChat />
            </div>
        </div>
    );
};

export default Chat;