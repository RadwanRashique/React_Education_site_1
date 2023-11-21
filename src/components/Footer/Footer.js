import React from 'react'
import './Footer.css'
import Image from  '../../assets/footer.png'

 function Footer() {
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
      <a href=''>  Our Programs</a>
    
      
      </li>
    <li>
    <a href=''> Our Plan</a>
      
      </li>
    <li>
    <a href=''>  Become a member</a> 
     r</li>
  </ul>
</div>
<div className='footer-box'>
<h4 className='footer_title'>Quick links</h4>
  <ul className='footer_links'>
    <li
    
    >
       <a href='/about'>  About Us</a> 
     </li>
    <li>
    <a href='/contact'>   Contact Us</a> 
     </li>
    <li>
    <a href=''>  Support Us</a> 
     </li>
  </ul>
</div>

  </div>
</div>

  </footer>
  )
}

export default  Footer