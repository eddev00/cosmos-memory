import React from 'react'
//import pages 
import Home from '../pages/Home'
import Loading from '../pages/Loading'
import DatePick from '../pages/Datepick'
import DisplayData from '../pages/DisplayData'

//import routes route & useLocation hook
import {Routes, Route,useLocation} from 'react-router-dom'

function AnimRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Loading" element={<Loading/>}/>
        <Route path="/DatePick" element={<DatePick/>}/>
        <Route path="/DisplayData" element={<DisplayData/>}/>

    </Routes>
  )
}

export default AnimRoutes