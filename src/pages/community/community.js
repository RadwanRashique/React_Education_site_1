import React from 'react'
import './community.css'
import tc from '../../assets/tc.png'
function 
Community(){
    const handleClick=()=>{
        window.open('https://www.linkedin.com/in/radwanrashique916/?originalSubdomain=in')
    }
    return(
        <div className='container'>
            <div className='start-wrapper'>
<div className='start-img'>
<img  src={tc} alt=''/>
</div>

<div className='start-content'>
    <h2 className='section-title'>Join Our Free Coummunity </h2>
    <p >Unlock the power of Knowledge and Innovation by joining our free telegram group</p>
<button className='register-btn' Onclick={{handleClick}}>Join Now</button>

</div>
</div>
        </div>
    )

}
export default Community