import React from 'react'
import R  from '../../assets/R.jpeg'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
// navigation item list
const navTitles=[{
  path: '/',display:'Home'
},
{
  path: '/services',display:'Services'
},
{
  path: '/courses',display:'Courses'
},
{
  path: '/about',display:'About Us'
}

]




  return (
   <header className='header'>
<div className='container'>
  <div className='nav_container'>
<div className='logo'>
<div className='logo-img'>
  <img src={R} alt='' />
</div>
<h1>idhusApp</h1>


</div>
<div className='navigation'>
<ul className='menu'>
  {
    navTitles.map((item)=>
 <li className='nav_item'>
  <Link to={item.path}> {item.display}</Link>
 
 </li>
 )
  }
 

</ul>
</div>



  </div>
  </div>

  
   </header>
  )
}
