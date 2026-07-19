import React, { useState } from 'react';
import './Navbar.css';

const links = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
        <span className="navbar__brand-dot" />
        DD.
      </a>

      <button
        className="navbar__toggle"
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="navbar__link"
            onClick={handleLinkClick}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;