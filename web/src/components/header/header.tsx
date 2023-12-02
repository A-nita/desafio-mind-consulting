// header
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="header">
      <h1>/Mind Cursos</h1>
      {/* sair */}
      <div className="header-user">
        <span>{user?.name}</span>
        <Link to="/" onClick={signOut}>
          <img src={logoutIcon} alt="Sair" />
        </Link>
      </div>
    </header>
  );
}