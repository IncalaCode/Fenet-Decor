import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NavItems = ({ items, isMobile = false }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  if (!items || items.length === 0) return null;
  
  const handleItemClick = (index, onClick) => {
    setActiveItem(index);
    if (onClick) onClick();
  };
  
  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  
  // Apply different base classes based on mobile or desktop view
  const listClasses = isMobile
    ? "flex flex-col w-full list-none m-0 p-0 gap-3"
    : "flex list-none m-0 p-0 gap-6";
    
  // Apply different item classes based on mobile or desktop view  
  const getItemClasses = (isActive) => {
    const activeClass = isActive ? 'font-semibold text-blue-600 dark:text-blue-400' : '';
    return isMobile
      ? `py-2 border-b border-gray-100 dark:border-gray-700 w-full ${activeClass}`
      : `cursor-pointer ${activeClass}`;
  };
  
  // Apply different dropdown classes based on mobile or desktop view
  const getDropdownClasses = () => {
    return isMobile
      ? "bg-gray-50 dark:bg-gray-700 rounded-md py-2 pl-4 pr-2 mt-2 mb-2 w-full"
      : "absolute top-full left-0 bg-white dark:bg-gray-800 shadow-md rounded-md py-2 min-w-[10rem] z-10 mt-1";
  };
  
  return (
    <ul className={listClasses}>
      {items.map((item, index) => {
        if (React.isValidElement(item)) {
          // Wrap custom element in responsive container
          return (
            <li key={index} className="w-full flex justify-start">
              <div className="responsive-wrapper">
                {React.cloneElement(item, {
                  style: { ...item.props.style, maxWidth: '100%' }
                })}
              </div>
            </li>
          );
        }
        
        const { label, dropdown, onClick, active } = item;
        const isActive = active || activeItem === index;
        
        if (dropdown) {
          const isOpen = openDropdown === index;
          return (
            <li 
              key={index} 
              className={getItemClasses(isActive)}
            >
              <span 
                className="cursor-pointer flex items-center justify-between w-full"
                onClick={() => handleDropdownToggle(index)}
              >
                <span>{label}</span> <span className="ml-1">{isOpen ? '▲' : '▼'}</span>
              </span>
              {isOpen && (
                <ul className={getDropdownClasses()}>
                  {dropdown.map((subItem, subIndex) => (
                    <li 
                      key={subIndex} 
                      className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer ${subItem.active ? 'font-semibold text-blue-600 dark:text-blue-400' : ''}`}
                      onClick={() => {
                        if (subItem.onClick) subItem.onClick();
                        if (!isMobile) setOpenDropdown(null);
                      }}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        }
        
        return (
          <li 
            key={index} 
            className={getItemClasses(isActive)}
            onClick={() => handleItemClick(index, onClick)}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
};

NavItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({
        label: PropTypes.string,
        onClick: PropTypes.func,
        active: PropTypes.bool,
        dropdown: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
            active: PropTypes.bool
          })
        )
      })
    ])
  ),
  isMobile: PropTypes.bool
};

export default NavItems;
