import React from 'react'
import ai from '../../assets/ai.png'
import sd from '../../assets/sd.png'
import dg from '../../assets/dg.png'
import hacker from '../../assets/hacking.png'
import './courses.css'

function Courses(){

  const  courseData=[{
    title:"Machine Learning",
    desc:"Master MI",
    img:ai

    },{
        title:"Digital Marketing",
        desc:"Advanced Program",
        img:dg
    },{
        title:"cyber security",
        desc:"Beginer Program",
        img:hacker
    },
    {
        title:"software development",
        desc:"Advanced Program",
        img:sd
    }
]
    return(
        <div className=' container course-container'>

            <div className='course-top'>
            <h2 className='section_title'>Our Free Courses   </h2>
<p >The Top Trending Free Courses With Certificates</p>
<div className='course-wrapper'>
    {
        courseData.map((item,index)=>(
<div key={index} className='course-item'>
    <span className='course-icon'>
        <img src={item.img} alt={item.name}/>
    </span>
    <div className='course-content'>
<h4>{item.title}</h4>
<p>{item.desc}</p>
    </div>

</div>
   ))}
</div> 
            </div>

        </div>
    )
}

 export default Courses