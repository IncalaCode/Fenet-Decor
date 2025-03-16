import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ src, text, customElement }) => {
  // If custom element is provided, wrap it in a responsive container
  if (customElement) {
    return (
      <div className="max-w-[200px] overflow-hidden flex items-center">
        {React.cloneElement(customElement, {
          className: `${customElement.props.className || ''} max-h-10 w-auto`
        })}
      </div>
    );
  }
  
  if (src) return <img src={src} alt="Logo" className="h-8 md:h-10 w-auto" />;
  if (text) return <h1 className="text-lg md:text-xl font-bold m-0 truncate">{text}</h1>;
  return null;
};

Logo.propTypes = {
  src: PropTypes.string,
  text: PropTypes.string,
  customElement: PropTypes.element
};

export default Logo;
