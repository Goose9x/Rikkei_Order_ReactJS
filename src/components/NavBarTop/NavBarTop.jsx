import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBarTop.css";
function NavBarTop() {
  return (
    <>
      <div className='navbar-top'>
        <div className='logo'>RIKKEI MART</div>
        <div className='nav-menu'>
          <Link to='/'>Home</Link>
          <Link to='/all_item'>All items</Link>
          <Link to='#'>News</Link>
          <Link to='#'>About us</Link>
          <Link to='#'>Contact us</Link>
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Browse for more...' />
          <button>
            <ion-icon name='search-outline'></ion-icon>
          </button>
        </div>
        <div className='user'>
          <Link>
            <ion-icon name='heart'></ion-icon>
          </Link>
          <Link>
            <ion-icon name='bag-handle'></ion-icon>
          </Link>
          <Link>
            <ion-icon name='person'></ion-icon>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBarTop;
