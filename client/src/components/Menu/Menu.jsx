/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import {
  Menu as MenuIcon, Plus, Settings, UserRound, X,
} from 'lucide-react';

export default function Menu() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <div className="menu-container">
      <div className={active ? '' : 'hide'}>
        <Link to="/add" className="menu-links">
          <div className="menu">
            <Plus className="icon" />
          </div>
        </Link>
        <Link to="/account" className="menu-links">
          <div className="menu">
            <UserRound className="icon" />
          </div>
        </Link>
        <Link to="/settings" className="menu-links">
          <div className="menu">
            <Settings className="icon" />
          </div>
        </Link>
        <div className="close-menu" onClick={ToggleMode}>
          <X className="icon" />
        </div>
      </div>
      <div className={active ? 'hide menu' : 'menu'} onClick={ToggleMode}>
        <MenuIcon className="icon" />
      </div>
    </div>
  );
}
