import React, { useState } from 'react'
import LOGO from '../assets/LOGO.svg'
import NavBtn from './NavBtn';

const Heading = () => {
  const [navButtons, setNavButtons]= useState([
    {id:1, name:"Home", url:"/", isActive:true},
    {id:2, name:"About", url:"/AboutUs", isActive:false},
    {id:3, name:"Blog", url:"/Blog", isActive:false},
    {id:4, name:"Contact", url:"/ContactUs", isActive:false},
  ]);
  const handlerChanger = (id)=>{
    setNavButtons(navButtons.map((btn)=> btn.id === id? {...btn, isActive:true}: {...btn, isActive:false}))
  };
  return (
    <div className='py-5 bg-white shadow-lg border-[1px] border-[#5F6D7E66] h-[72px] px-5 flex justify-between'>
      <img src={LOGO} alt="" />
      <div className='flex gap-5 w-[250px]'>
      {navButtons.map((item)=>(<NavBtn key={item.id} item={item} handlerChanger={handlerChanger}/>))}
      </div>
    </div>
  )
}

export default Heading