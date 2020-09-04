import React from 'react'
import './Input.css'

function Input({message,setMessage,sendMessage}) {
  
    return (
        <div>
     



           <form className="form-inline myform">
  
  <input  className="myinput" placeholder="Type Your message here...." value={message} onChange={(e)=>setMessage(e.target.value)} onKeyPress={event=>event.key==='Enter' ? sendMessage(event) : null}/>
 
  <button
               className=" btn btn-primary mybtn"
               onClick={(event)=>sendMessage(event)}>
             Send
           </button>
</form>
            
        </div>
    )
}

export default Input
