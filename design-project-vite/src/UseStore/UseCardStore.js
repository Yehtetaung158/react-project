import { create } from 'zustand'

export const useCardStore = create((set)=>({
  CardItems : [
    {id:1, title:"Wireless", para:"Enim nec rhoncus volutpat nullam eros sapien pharetra.",img:"profile", isShown:true},
    {id:2, title:"Synergistic", para:"Neque ut integer nulla tellus semper amet id scelerisque eros.",img:"profile2", isShown:true},
    {id:3, title:"Distributed", para:"Aliquet et cras nam sed mauris laoreet bibendum et.",img:"profile3", isShown:true},
    {id:4, title:"Wireless", para:"Enim nec rhoncus volutpat nullam eros sapien pharetra.",img:"profile", isShown:false},
    {id:5, title:"Synergistic", para:"Neque ut integer nulla tellus semper amet id scelerisque eros.",img:"profile2", isShown:false},
    {id:6, title:"Distributed", para:"Aliquet et cras nam sed mauris laoreet bibendum et.",img:"profile3", isShown:false},
    {id:7, title:"Wireless", para:"Enim nec rhoncus volutpat nullam eros sapien pharetra.",img:"profile", isShown:false},
    {id:8, title:"Synergistic", para:"Neque ut integer nulla tellus semper amet id scelerisque eros.",img:"profile2", isShown:false},
    {id:9, title:"Distributed", para:"Aliquet et cras nam sed mauris laoreet bibendum et.",img:"profile3", isShown:false},
  ],
  anotherPage : (id) => set( (state) => (state.map((item) => item.id === id ? {...item, isShown: !item.isShown} : {...item, isShown: false}))),}));

