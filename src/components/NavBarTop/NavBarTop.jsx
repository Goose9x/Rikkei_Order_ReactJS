import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
import "./NavBarTop.css";
function NavBarTop(props) {
  let { handleSetDefaultCate, cartData } = props;
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]);
  useEffect(() => {
    // console.log(Cookies.get("userId"));
    // console.log(Cookies.get("role"));
    // console.log(Cookies.get("name"));
    // console.log(Cookies.get("avatar"));
    if (Cookies.get("name")) {
      setUsername(Cookies.get("name"));
      setAvatar(Cookies.get("avatar"));
    }
  }, []);

  const logOut = () => {
    removeCookie("name", { path: "/" });
    removeCookie("role", { path: "/" });
    removeCookie("userId", { path: "/" });
    removeCookie("avatar", { path: "/" });
    window.location.href = "http://localhost:8000/";
  };

  return (
    <>
      <div className='navbar-top'>
        <div className='nav-logo'>RIKKEI MART</div>
        <div className='nav-menu'>
          <Link to='/'>Home</Link>
          <Link to='/all_item' onClick={handleSetDefaultCate}>
            All items
          </Link>
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
          <div className='user-profile'>
            {username ? (
              <div className='user_display'>
                <div className='user_display-image'>
                  <img src={avatar} alt='.' />
                </div>
                {username}
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='/'>
                      Tài khoản
                    </a>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/cart'>
                      Giỏ hàng ({cartData.length})
                    </Link>
                  </li>
                  <li>
                    <Link to='/favorite' className='dropdown-item' href='/'>
                      Yêu thích
                    </Link>
                  </li>
                  <li>
                    <button className='dropdown-item' onClick={logOut}>
                      Đăng xuất
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className='user-profile-login'>
                <Link to='/login'>Đăng nhập/Đăng kí</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarTop;
