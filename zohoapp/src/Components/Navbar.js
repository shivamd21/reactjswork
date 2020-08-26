import React from 'react'
import './CSS/nav.css'

function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top alllinnks">
        <button className="navbar-toggler " data-toggle="collapse" data-target="#actionitem">
        <span className="navbar-toggler-icon  "></span>
      </button>
      <img className="img-fluid" width="280" height="100" src="data:image/png;base64,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" />
      
        <div className="collapse navbar-collapse" id="actionitem">
          <ul className="nav navbar-nav mr-auto">
           
          </ul>
          <ul className="nav navbar-nav">
            <li className="nav-item">
            <a className="mynav" href="#"  >Customers</a>
            </li>
            <li className="nav-item">
            <a className="mynav" href="#" >Support</a>
            </li>
    
            <li className="nav-item">
            <a className="mynav" href="#" >Contact Sales</a>
            </li>
            <li className="nav-item">
            <a className="mynav" href="#">Login</a>
            </li>
            <li className="nav-item">
            <a href="#" className="text-danger mynav">Free Sign up</a>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
        <a className="mynav" href="#" type="submit"><i className="fa fa-search"></i></a></form>
       
      </nav>
        </div>
    )
}

export default Navbar


