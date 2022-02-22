import React from "react";
import { NavLink } from "react-router-dom";
import './MainNav.css'
export const MainNav = (prop) => {
  return (
    <header className="main-navigation">
      <div className="main-navigation__logo">
        <h1>EasyEvent</h1>
        <nav className="main-navigation__items">
          <ul>
            <li>
              <NavLink to="auth">Authenticate</NavLink>
            </li>
            <li>
              <NavLink to="events">Events</NavLink>
            </li>
            <li>
              <NavLink to="bookings">Bookings</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
