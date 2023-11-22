
import React from 'react'

import sachin from '../../assets/sachinimg.webp'
import './AboutUs.css'

function AboutUs(){
    return(
<div className='container'>
    <div className='about-us-container'>
<div className='team-members'>
    <h2>Our Team</h2>
    <div className='member_card'>
<img className='member-image' src={sachin} alt='Sachin Tendulkar'/>
<h3 className='member-name'>Sachin Tendulkar</h3>
<p className='member-role'>Co-Founder</p>
    </div>

</div>
<div className='about-us-description'>
    <h1 className='about-us-heading'>
About Us
    </h1>
    <p>
we have dash......
    </p>
</div>
    </div>
</div>
    )
}

export default AboutUs