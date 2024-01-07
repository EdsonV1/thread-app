import React, { useState } from "react";
import "../styles/Chat.css";
import { useTheme } from '../../ThemeContext';

const CurrentChat = () => {
    const { currentTheme, light, dark } = useTheme();
    const theme = currentTheme === 'light' ? light : dark;

    const [messageInput, setMessageInput] = useState("");
    const [chatMessages, setChatMessages] = useState([
        { id: 1, user: "User1", message: "Hello there!" },
        { id: 2, user: "User2", message: "Hi! How are you?" },
    ]);

    const handleInputChange = (e) => {
        setMessageInput(e.target.value);
    };

    const sendMessage = () => {
        if (messageInput.trim() !== "") {
            const newMessage = {
                id: chatMessages.length + 1,
                user: "CurrentUser", 
                message: messageInput.trim(),
            };

            setChatMessages([...chatMessages, newMessage]);
            setMessageInput(""); 
        }
    };

    return (
        <div className="right-section" style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }}>
            {/* Current chat */}
            <div className="current-chat" style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }}>
                {/* Display current chat messages */}
                {chatMessages.map((message) => (
                    <div key={message.id} className={`chat-message ${message.user === "CurrentUser" ? 'sent-by-current-user' : 'sent-by-other-user'}`}>
                        <span className="username">{message.user}</span>
                        <span className="message">{message.message}</span>
                    </div>
                ))}
            </div>

            {/* Input for sending message */}
            <div className="message-input" style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }}>
                <input
                    type="text"
                    placeholder="Type your message..."
                    style={{backgroundColor: theme.color_inner_input, color: theme.color_text}}
                    value={messageInput}
                    onChange={handleInputChange}
                />
                <i className="material-icons send-icon" onClick={sendMessage}>send</i>
            </div>
        </div>
    );
};

export default CurrentChat;
