
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
    I'm a patient, adaptable, and positively-minded individual with an insatiable passion for innovation. I'm constantly seeking ways to elevate my results-oriented approach to new heights.

🎓 Education: I completed my 10th grade from AMMHS Pulikkal and pursued +2 science from Government HSS Pantirankavu, Calicut. My educational journey continued with a B.Sc. in Electronics from the Institute of Human Development, Vazhakkad. During this time, I proudly served as a member of the National Service Scheme (NSS).
🏆 Leadership Experience: While in college, I had the privilege of serving as the college leader of the Innovation and Entrepreneurship Development Center (IEDC). In this role, I connected students with startup founders, facilitating the growth of innovative ideas and helping startups thrive. This experience significantly enhanced my leadership qualities and fueled my commitment to fostering innovation.

🛠️ Project Experience: One of my proudest accomplishments was working on a project involving Virtual Assistance-based "Hello Robo" in embedded systems, successfully completed from Nexus Technologies. More recently, I took the lead in a significant e-commerce project, harnessing technologies like MongoDB, Node.js, Express, JavaScript, EJS, HTML5, and CSS3, and successfully hosted it.

💼 Professional Experience: I've had the privilege of working as a field engineer at JioFiber, where I gained valuable experience and honed my technical skills.

🌐 Current Endeavors: I'm currently building a freelance website that connects clients with developers—a project close to my heart. Simultaneously, I've launched and worked on a variety of mini-projects, each serving as a stepping stone in my journey to flourish my skills.It was my extensive involvement in more than 10 mini-projects that played a transformative role in my skill development.

💡 Freelance Projects: In my free time, I take on freelance projects, including this new venture, to further refine and expand my skills.

I'm always on the lookout for opportunities to collaborate, learn, and grow. If you share my enthusiasm for innovation and a passion for continuous improvement, let's connect and explore how we can make a meaningful impact together.
    </p>
</div>
    </div>
</div>
    )
}

export default AboutUs