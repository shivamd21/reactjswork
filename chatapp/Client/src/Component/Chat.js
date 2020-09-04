import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import io from 'socket.io-client'
import Infobar from './Infobar/Infobar';
import './CSS/join.css'
import Input from './Input/Input';
import Messages from './ShowMessages/Messages/Messages';
let socket;
function Chat() {
    const [n, setName] = useState()
    const [r, setRoom] = useState()
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = "https://guarded-springs-54159.herokuapp.com/"
    const { name, room } = useParams()
    useEffect(() => {
        setName(name)
        setRoom(room)
        socket = io(ENDPOINT)
        socket.emit('join', { name, room }, () => {
        })
        return () => {
            socket.emit("disconnect")
            socket.off()
        }
    }, [ENDPOINT])
    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message])
        })
    }, [messages])
    function sendMessage(event) {
        event.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                </div></div>
            <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="joincard card">
                        <div className="card-body">
                            <Infobar room={room} /> <br /><br /><br />
                            <div className="msg">
                                <Messages messages={messages} name={name} />

                            </div>
                            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

                        </div></div></div></div>
            <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                </div></div>
        </div>
    )
}

export default Chat