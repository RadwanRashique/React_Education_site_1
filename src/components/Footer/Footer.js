import React from 'react'
import './Footer.css'
import Image from  '../../assets/footer.png'
import { Link } from 'react-router-dom'

 function Footer() {
  const handleClick =()=>{
    window.scrollTo(0,0)

  }
  return (
  <footer className='footer'>
<div className='container'>
  <div className='footer_wrapper'>
<div className='footer-box'>
  <div className='logo'>
    <div className='logo-img'>
      <img src={Image} alt=''/>
    </div>
    <h2>RidhusApp</h2>
  </div>
  <p>Change a little on a daily basics</p>
</div>
<div className='footer-box'>
  <h4 className='footer_title'>Company</h4>
  <ul className='footer_links'>
    <li>
     
      <Link to='/courses' onClick={handleClick}>Our Programs</Link>
    
      
      </li>
    <li>
   
    <Link to='services' onClick={handleClick}>Our Plan</Link>
      
      </li>
    <li>
    
    <Link to='https://t.me/brocampStudentConnect'> Become a member</Link>
     r</li>
  </ul>
</div>
<div className='footer-box'>
<h4 className='footer_title'>Quick links</h4>
  <ul className='footer_links'>
    <li
    
    >
       <Link to='/about' onClick={handleClick}>  About Us</Link>
     </li>
    <li>
   
    <Link to='/contact' onClick={handleClick}>Contact Us</Link>
     </li>
    <li>
    <Link to='/support' onClick={handleClick}>SupportUs</Link>
     </li>
  </ul>
</div>

  </div>
</div>

  </footer>
  )
}

export default  Footer