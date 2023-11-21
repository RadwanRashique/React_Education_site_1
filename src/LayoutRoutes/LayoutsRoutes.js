import React from 'react'
import {BrowserRouter as Router,Route,Routes} from  'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plans from '../pages/Plans/Plans'
import Courses from '../pages/courses/courses'
import AboutUs from '../pages/AboutUs/AboutUs'
import ContactUs from '../pages/Contact/ContactUs'
function LayoutRoutes(){
    return(
       <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/services' element={<Plans/>}></Route>
       <Route path='/courses' element={<Courses/>}></Route>
       <Route path='/about' element={<AboutUs/>}></Route>
       <Route path='/contact' element={<ContactUs/>}></Route>
        </Routes>
      <Footer/>
       </Router>
    )
}
export default LayoutRoutes

