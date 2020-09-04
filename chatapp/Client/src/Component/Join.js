import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './CSS/join.css'

function Join() {
    const [name, setName] = useState()
    const [room, setRoom] = useState()
    const history = useHistory()
    function submitHandler() {
        history.push(`/chat/${name}/${room}`)
    }
    return (
        <div>
            <div className="row">
                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                    <div className="joincard card">
                        <div className="card-body">
                            <form >
                                <div className="form-group">
                                    <label >Participant Name:</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter  Name" />
                                </div>
                                <div className="form-group">
                                    <label>Room Name:</label>
                                    <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} className="form-control" id="pwd" placeholder="Enter Room" />
                                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className=" mybtn btn btn-primary" onClick={submitHandler}><i className="material-icons"> arrow_right_alt</i></button>
                                </div>
                            </form>
                        </div></div></div></div>
        </div>
    )
}

export default Join
