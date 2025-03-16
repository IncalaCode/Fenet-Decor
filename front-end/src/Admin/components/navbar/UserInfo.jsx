import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ imagePath, text, customElement }) => {
  // If custom element is provided, wrap it in a responsive container
  if (customElement) {
    return (
      <div className="max-w-[150px] md:max-w-[200px] overflow-hidden">
        {React.cloneElement(customElement, {
          className: `${customElement.props.className || ''} flex items-center`
        })}
      </div>
    );
  }
  
  return (
    <div className="flex items-center gap-2">
      {imagePath && (
        <img 
          src={imagePath} 
          alt="User" 
          className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover" 
        />
      )}
      {text && (
        <span className="font-medium text-sm md:text-base max-w-[90px] md:max-w-[120px] truncate">
          {text}
        </span>
      )}
    </div>
  );
};

UserInfo.propTypes = {
  imagePath: PropTypes.string,
  text: PropTypes.string,
  customElement: PropTypes.element
};

export default UserInfo;
