import React from 'react'
import './Infobar.css'

function Infobar({ room }) {
    return (
        <div className="bg-primary">
            <div id="d1">
                <b>{room}</b>
            </div>
            <div id="d2">
                <a href="/"><i className="fa fa-window-close"></i></a>
            </div>
        </div>
    )
}

export default Infobar
