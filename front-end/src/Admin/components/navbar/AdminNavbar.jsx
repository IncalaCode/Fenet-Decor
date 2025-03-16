import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import NavItems from './NavItems';
import UserInfo from './UserInfo';
import LogoutButton from './LogoutButton';

// Main Navbar Component
const AdminNavbar = ({ layout }) => {
  const { left_side = {}, center = {}, right = {} } = layout?.navbar || {};
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Buttons rendering function - ensures responsive styling
  const renderButtons = (buttonConfig) => {
    if (!buttonConfig) return null;
    
    const buttons = Array.isArray(buttonConfig) ? buttonConfig : [buttonConfig];
    
    return buttons.map((btn, i) => {
      if (React.isValidElement(btn)) {
        // Wrap custom element in a div with responsive classes
        return (
          <div key={i} className="w-full sm:w-auto">
            {React.cloneElement(btn, { 
              className: `${btn.props.className || ''} w-full sm:w-auto flex justify-center items-center`
            })}
          </div>
        );
      } else {
        return (
          <button 
            key={i} 
            className="bg-blue-600 text-white border-none rounded-md py-2 px-4 cursor-pointer font-medium transition-all duration-200 hover:bg-blue-700 w-full sm:w-auto text-center" 
            onClick={btn.onClick}
          >
            {btn.label}
          </button>
        );
      }
    });
  };
  
  return (
    <>
      <nav className="flex justify-between items-center bg-white dark:bg-gray-800 px-4 md:px-6 py-3 shadow-sm dark:text-white transition-colors duration-200">
        {/* Left side - visible on all screen sizes */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Hamburger menu for mobile */}
          <button 
            className="md:hidden flex items-center p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Logo - always visible */}
          {left_side.logo && (
            <Logo 
              src={typeof left_side.logo === 'string' ? left_side.logo : null} 
              text={typeof left_side.logo === 'object' ? left_side.logo.text : null}
              customElement={typeof left_side.logo === 'object' && left_side.logo.customElement}
            />
          )}
          
          {/* Search bar - hidden on small screens */}
          {left_side.searchbar && (
            <div className="hidden md:block">
              <SearchBar 
                customElement={typeof left_side.searchbar === 'object' ? left_side.searchbar : null} 
              />
            </div>
          )}
        </div>
      
        {/* Center nav items - visible only on medium screens and above */}
        <div className="hidden md:flex items-center gap-4 flex-grow justify-center">
          {center.items && <NavItems items={center.items} />}
        </div>
      
        {/* Right - theme toggle and user info */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme toggle - visible on all screens */}
          {center.theme && (
            <ThemeToggle 
              customElement={typeof center.theme === 'object' ? center.theme.customElement : null} 
            />
          )}
          
          {/* User info - visible on all screens */}
          {right.user_info && (
            <div className="hidden sm:block">
              <UserInfo 
                imagePath={typeof right.user_info === 'string' ? right.user_info : null}
                text={typeof right.user_info === 'object' ? right.user_info.text : null}
                customElement={typeof right.user_info === 'object' ? right.user_info.customElement : null}
              />
            </div>
          )}
          
          {/* Language and logout only visible on larger screens */}
          <div className="hidden lg:flex items-center gap-2">
            {center.language && (
              <LanguageSelector 
                languages={center.language.options}
                customElement={typeof center.language === 'object' ? center.language.customElement : null}
              />
            )}
            
            {right.logout && (
              <LogoutButton 
                customElement={typeof right.logout === 'object' ? right.logout : null}
                onLogout={typeof right.logout === 'object' ? right.logout.onLogout : undefined}
              />
            )}
          </div>
        </div>
      </nav>
      
      {/* Mobile menu overlay - only shown on small screens when menu is open */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md pt-2 pb-4 px-4 z-10 dark:text-white transition-colors duration-200">
          {/* Search bar in mobile menu */}
          {left_side.searchbar && (
            <div className="mb-4 w-full">
              <SearchBar 
                customElement={typeof left_side.searchbar === 'object' ? left_side.searchbar : null} 
              />
            </div>
          )}
          
          {/* Nav items in mobile view */}
          {center.items && (
            <div className="mb-4">
              <NavItems items={center.items} isMobile={true} />
            </div>
          )}
          
          {/* Center buttons */}
          {center.button && (
            <div className="flex flex-col gap-2 mb-4">
              {renderButtons(center.button)}
            </div>
          )}
          
          {/* Language selector in mobile menu */}
          {center.language && (
            <div className="mb-4">
              <LanguageSelector 
                languages={center.language.options}
                customElement={typeof center.language === 'object' ? center.language.customElement : null}
              />
            </div>
          )}
          
          {/* Logout button in mobile menu */}
          {right.logout && (
            <div className="w-full">
              <LogoutButton 
                customElement={typeof right.logout === 'object' ? right.logout : null}
                onLogout={typeof right.logout === 'object' ? right.logout.onLogout : undefined}
                fullWidth={true}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

AdminNavbar.propTypes = {
  layout: PropTypes.shape({
    navbar: PropTypes.shape({
      left_side: PropTypes.shape({
        logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        searchbar: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
      }),
      center: PropTypes.shape({
        language: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        theme: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        items: PropTypes.array,
        button: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.element]),
      }),
      right: PropTypes.shape({
        logout: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        user_info: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      }),
    }),
  })
};

export default AdminNavbar;
