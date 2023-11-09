import React from 'react'
import metaImg from '../assets/meta.jpeg'
import {AiOutlineWhatsApp}  from 'react-icons/ai'
import './Home.css'
import Courses from './courses/courses'
import Community from './community/community'
import Plans from './Plans/Plans'
function Home(){

const handdleClick=()=>{
    window.open('https://www.youtube.com/@RadwanRashique')
}
    return(
        <>
       <section >
<div className='container'>
<div className='home-container'>

    <div className='home-content'>
<h2 className='section_title'>Learn Everything For Free!!</h2>
<p>we will take you from Zero to Hero get ready for a change</p>
<div className='home-btns'>
<button className='register-btn'>
Get Started
</button>
<button className='register-btn' onClick={handdleClick}>
Watch Now
</button>

</div>

    </div>
    <div className='home-img'>
<div className='home-img-wrapper'>
    <div className='box-01'>
        <div className='box-img'>

       <img  src={metaImg}  alt=''/>
        </div>
    </div>
    <div className='whatsapp-container'>
        <h5>2000+ students</h5>
        <AiOutlineWhatsApp  color='green'/>
    </div>
    <div className='support'>
        <h5>ActiveSupport</h5>
    </div>
</div>

    </div>

</div>


</div>
       </section>

<Courses/>
<Community/>
<Plans/>
</>
    )
}

export default Home