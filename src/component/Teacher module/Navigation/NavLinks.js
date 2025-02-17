import React from 'react';

import{ NavLink }  from 'react-router-dom';
import './NavLinks.css';
const NavLinks = props =>{
  return<ul className='nav-links'>
   <li>
     <NavLink to = "/users" exact>USERS</NavLink>
   </li>
   <li>
   <NavLink to = "/attendance">ATTENDANCE</NavLink>
 </li>
 <li>
 <NavLink to = "u1/dash">DASHBOARD</NavLink>
</li>
<li>
<NavLink to = "/time">TIMETABLE</NavLink>
</li>
<li>
<NavLink to="/assign">ASSIGNMENT</NavLink>
</li>
<li>

</li>
  </ul>
}

export default NavLinks;