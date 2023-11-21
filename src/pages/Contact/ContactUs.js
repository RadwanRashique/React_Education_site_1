import React from 'react'
import './ContactUs.css'

 function ContactUs(){

    return(
<div className='container'>
    <div className='contact-us-container'>
        <h1>Contact Us</h1>
        <p>We are really axcited to get your grate valuable comment for our growth by changing the life of manys</p>
<form className='contact-form'>
    <div className='form-group'>
 <label htmlFor='name'>Name:</label>
 <input id='name' name='name' type='text' required/>
    </div>
    <div className='form-group'>
    <label htmlFor='email'>Name:</label>
 <input id='email' name='email' type='email' required/>
</div>
<div className='form-group'>

</div>

</form>
    </div>

</div>
)
 }
 export default ContactUs