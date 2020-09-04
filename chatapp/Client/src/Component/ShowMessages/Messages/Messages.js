import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/Message'

function Messages({ messages, name }) {
    return (
        <div>
            <ScrollToBottom>
                {messages.map((message, i) => <div key={i}><Message name={name} message={message} /></div>)}
            </ScrollToBottom>
        </div>
    )
}

export default Messages
