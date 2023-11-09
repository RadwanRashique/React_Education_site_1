import './Plans.css'

function Plans(){

    const pricingData=[{
        title:'Premium Member',
        price:3000,
        duration:'/month',
        color:'#ffff',
        feature:[
            'Unlimited access to the Courses',
            "Coustomer Support",
            "personal Mentor",
            "7 free class per week"
        ]

    },
    {
        title:'Premium Member',
        price:3000,
        duration:'/month',
        color:'#6f55f2',
        feature:[
            'Unlimited access to the Courses',
            "Coustomer Support",
            "personal Mentor",
            "7 free class per week"
        ]

    },
    {
        title:'Premium Member',
        price:3000,
        duration:'/month',
        color:'#ffff',
        feature:[
            'Unlimited access to the Courses',
            "Coustomer Support",
            "personal Mentor",
            "7 free class per week"
        ]

    }]
    return(
        <div className="container">
<div className="pricing_top">
<h2>Premium Prcing Plan</h2>
<p>Unlock The Premium Plan And Explore</p>
</div>

<div className="pricing_wrapper">
{pricingData.map((pricingItem,index)=>(
<div key={index} className="pricing_item">
    <div className="pricing_card_top" style={{background:pricingData.color}}>
        <h2 className="section_title">{pricingItem.title}</h2>
        <h2 className="pricing_section_title">
            {pricingItem.price}
            <span>{pricingItem.duration}</span>
        </h2>
    </div>
<div className="services">
<ul>
    {pricingItem.feature.map((feature,index)=>(
    <li key={index}>
{feature}
    </li>
    ))}

    <button className="register-btn">Join</button>
</ul>
</div>
</div>
))
}
</div>
        </div>

       
    )
}

export default  Plans