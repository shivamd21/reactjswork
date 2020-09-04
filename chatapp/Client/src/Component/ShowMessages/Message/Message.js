import React from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji'
function Message({ message: { user, text }, name }) {
    let iscurrentUser = false
    let trimmedname = name.trim().toLowerCase()
    if (user === trimmedname) {
        iscurrentUser = true
    }
    let data
    if (iscurrentUser) {
        data = <div> <p className="float-right  currentmsg1">
            {ReactEmoji.emojify(text)}
        </p><br/>
       <p className="float-right userdetails"><i>Sent by: YOU</i></p>
        </div>
    } else {
        data = <div> <p className="bg-light text-dark float-left">
            {ReactEmoji.emojify(text)}
        </p><br/>
        <p className="float-left userdetails"><i>Sent by: {user}</i></p>
    
        </div>
    }
    return (
        <div>
            {data}<br /><br />
        </div>

    )
}
export default Message


