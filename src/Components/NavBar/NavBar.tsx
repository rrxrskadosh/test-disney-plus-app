import React from 'react';
import { useDispatch } from 'react-redux';
import { home } from "../../features/userSlice"
import "../NavBar/NavBar.css"

import { Link } from "react-router-dom"
const Navbar = () => {
    const dispatch = useDispatch();
    const handleLogout = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(home())
    }
    return(
        <>
        <div className="navbar">
            <img className="nav-logo" src="/images/logo.png" alt="Disney" />

           <ul className="nav-links">
              <Link to="/" className='link'>HOME</Link>
              <Link to="/search" className='link'>SEARCH</Link>
              <Link to="/watchlist" className='link'>WATCHLIST</Link>
              <Link to="/originals" className='link'>ORIGINALS</Link>
              <Link to="/movies" className='link'>MOVIES</Link>
              <Link to="/series" className='link'>SERIES</Link>
           </ul>
           <button className="logout-button" onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
            
        </>
    )
}

export default Navbar;