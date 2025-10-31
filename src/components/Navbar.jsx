import { useState } from 'react';
import './Styling/Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      {/* Navigation Links Visible on desktop */}
      <ul className="navbar-links">
        <li>
          <a 
            href="#video" 
            onClick={(e) => handleSmoothScroll(e, 'video')}
          >
            Featured
          </a>
        </li>
        <li>
          <a 
            href="#gallery" 
            onClick={(e) => handleSmoothScroll(e, 'gallery')}
          >
            Gallery
          </a>
        </li>
      </ul>
      
      {/* Mobile Menu Button */}
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-links">
          <li>
            <a 
              href="#video" 
              onClick={(e) => handleSmoothScroll(e, 'video')}
            >
              Featured
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              onClick={(e) => handleSmoothScroll(e, 'gallery')}
            >
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}