import React from 'react';


const Icon: React.FC<any> = ({ variant = 'outlined', ...props }) => {
  return (
    <span
      className={`material-symbols-${variant} ${props.className} transition-all`}
      onClick={props.onClick}
      style={props.style}
    >
      {props.name}
    </span>
  );
};

export default Icon;
