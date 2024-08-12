import React from 'react'
import LOGO from '../assets/LOGO.svg'
import NavBtn from './NavBtn';

const Heading = () => {
  const navButtons=[
    {id:1, name:"Home", isActive:true},
    {id:2, name:"About", isActive:false},
    {id:3, name:"Blog", isActive:false},
    {id:4, name:"Contact", isActive:false},
  ];

  return (
    <div className='py-5 bg-white shadow-lg border-[1px] border-[#5F6D7E66] h-[72px] px-5 flex justify-between'>
      <img src={LOGO} alt="" />
      <div>
      {navButtons.map((item)=>(<NavBtn key={item.id} name={item.name} isActive={item.isActive}/>))}
      </div>
    </div>
  )
}

export default Heading