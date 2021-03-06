import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MdAddAPhoto } from "react-icons/md";
class LoggedOut extends Component{
    render(){
        return(
            <div  className="header-container">
                <nav className='loggedOut'>
                        <div>
                            <Link to='/' id="name">GIFT AWAY</Link>
                        </div>
                        <div className="loggedOutLinks">
                            <Link to="/Post"><MdAddAPhoto/> Give</Link>
                            <Link to='/login'>Login</Link>
                        </div>
                </nav>
            </div>
        )
    }
}

export default LoggedOut;