import React from 'react'
import {BrowserRouter as Router,Route,Routes} from  'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Footer'
import Footer from  '../components/Header'
import Plans from '../pages/Plans/Plans'
import Courses from '../pages/courses/courses'
function LayoutRoutes(){
    return(
       <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/services' element={<Plans/>}></Route>
       <Route path='/courses' element={<Courses/>}></Route>
        </Routes>
       <Footer/>
       </Router>
    )
}
export default LayoutRoutes

