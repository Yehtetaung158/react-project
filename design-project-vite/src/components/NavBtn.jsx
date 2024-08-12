import React from 'react';
import { Link } from 'react-router-dom';

const NavBtn = ({ item: { id, name, isActive, url }, handlerChanger }) => {
  const handleClick = () => {
    handlerChanger(id);
  };

  return (
    <Link 
      to={url} 
      onClick={() => handleClick(id)}
      className={`${isActive===true ? 'text-blue-500' : ''}`} // Apply styles based on isActive
    >
      {name}
    </Link>
  );
};

export default NavBtn;
