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
      className={`${isActive===true ? 'text-[#6596A1]' : 'text-[#7F7D7D]'} font-lato`}
    >
      {name}
    </Link>
  );
};

export default NavBtn;
