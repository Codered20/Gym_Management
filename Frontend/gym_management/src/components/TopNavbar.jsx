import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { useAppContext } from './context/context';

export default function TopNavbar() {
  const {user} = useAppContext();
  return (
    <div className='topBar'>
      <div><Link to='/'>Home</Link></div>
      <div><Link to='/reviews'>Reviews</Link></div>
      <div><Link to='/bookavisit'>Book a visit</Link></div>
      <div><Link to= {user==="Empty"?'/login':'/profile'}>{user==="Empty"? "Log in/Sign up":`Hello ${user}`}</Link></div>
    </div>
  )
}
