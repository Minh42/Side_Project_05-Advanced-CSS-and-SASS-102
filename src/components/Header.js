import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import user from '../assets/img/user.jpg';
import { ReactComponent as Search} from '../assets/img/SVG/magnifying-glass.svg';
import { ReactComponent as Bookmark} from '../assets/img/SVG/bookmark.svg';
import { ReactComponent as Chat} from '../assets/img/SVG/chat.svg';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <img src={logo} alt="trillo logo" className="logo"/>
                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search hotels"/>
                    <button className="search__button">
                        <Search className="search__icon" fill='rgba(216, 3, 81, 0.733)'/>
                    </button>
                </form>
                <nav class="user-nav">
                    <div class="user-nav__icon-box">
                        <Bookmark className="user-nav__icon"/>
                        <span class="user-nav__notification">7</span>
                    </div>
                    <div class="user-nav__icon-box">
                        <Chat className="user-nav__icon"/>
                        <span class="user-nav__notification">13</span>
                    </div>
                    <div class="user-nav__user">
                        <img src={user} alt="User photo" class="user-nav__user-photo"/>
                        <span class="user-nav__user-name">Jonas</span>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;