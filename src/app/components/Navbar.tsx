"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useI18n } from "./I18nProvider";
import { getClientAssetPath, getClientRoutePath } from "../utils/paths";

export default function Navbar() {
  const { strings, links, setLang } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const s = strings?.navbar || {};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = getClientRoutePath('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <div className="navbar-brand">
          <a href={getClientRoutePath('/')} className="brand-link" onClick={handleHomeClick}>
            <img 
              src={getClientAssetPath('/assets/images/logo.png')} 
              alt="PLP Logo" 
              className="brand-logo"
            />
            <span className="brand-text">PLP</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-start">
            <a href={getClientRoutePath('/')} className="navbar-item" onClick={handleHomeClick}>
              {s.home || 'HOME'}
            </a>
            <Link href={getClientRoutePath('/wechatgroups')} className="navbar-item">
              {s.groups || 'CLUBS'}
            </Link>
            <Link href={getClientRoutePath('/events')} className="navbar-item">
              {s.events || 'EVENTS'}
            </Link>
            
            {/* Dropdown Menu */}
            <div 
              ref={dropdownRef}
              className="navbar-dropdown-container"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className="navbar-dropdown-trigger"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleDropdown();
                }}
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                {s.more || 'MORE'}
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className={`navbar-dropdown ${isDropdownOpen ? 'active' : ''}`}>
                <a href={links?.instagram || '#'} className="dropdown-item">
                  {s.instagram || 'Instagram'}
                </a>
                <a href={links?.rednote || '#'} className="dropdown-item">
                  {s.rednote || 'RedNote'}
                </a>
                <Link href={getClientRoutePath('/work')} className="dropdown-item">
                  {s.sponsor || 'Sponsor'}
                </Link>
                <Link href={getClientRoutePath('/work')} className="dropdown-item">
                  {s.ourTeam || 'Our Team'}
                </Link>
                <div className="dropdown-divider"></div>
                <Link href={getClientRoutePath('/work')} className="dropdown-item">
                  {s.contactUs || 'Contact Us'}
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-buttons">
              <button 
                className="lang-button"
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button 
                className="lang-button"
                onClick={() => setLang('zh')}
              >
                中
              </button>
              <a href={getClientRoutePath('/')} className="primary-button" onClick={handleHomeClick}>
                <strong>{s.aboutUs || 'About Us'}</strong>
              </a>
              <Link href={getClientRoutePath('/join-us')} className="secondary-button">
                {s.joinUs || 'Join Us'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


