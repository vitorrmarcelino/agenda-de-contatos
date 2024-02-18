import React from 'react';
import './Menu.css';
import {
  Menu as MenuIcon, Plus, Settings, UserRound, X,
} from 'lucide-react';

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu">
        <Plus className="icon" />
      </div>
      <div className="menu">
        <UserRound className="icon" />
      </div>
      <div className="menu">
        <Settings className="icon" />
      </div>
      <div className="close-menu">
        <X className="icon" />
      </div>
      <div className="menu">
        <MenuIcon className="icon" />
      </div>
    </div>
  );
}
