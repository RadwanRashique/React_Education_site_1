import React from 'react'
import logo  from '../../assets/logo.png'
import './Header.css'

export default function Header() {
// navigation item list
const navTitles=[{
  path: '/',display:'Home'
},
{
  path: '/',display:'Services'
},
{
  path: '/',display:'Courses'
},
{
  path: '/',display:'About Us'
}
]




  return (
   <header className='header'>
<div className='container'>
  <div className='nav_container'>
<div className='logo'>
<div className='logo-img'>
  <img src={logo} alt='' />
</div>
<h1>RidusApp</h1>


</div>
<div className='navigation'>
<ul className='menu'>
  {
    navTitles.map((item)=>
 <li className='nav_item'>
  {item.display}
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
