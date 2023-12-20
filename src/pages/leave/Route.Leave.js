import React from 'react'
import {Route, Routes} from "react-router-dom"

import EditLeave from './EditLeave';

const RouteLeave = () => {
  return (
    <div>
        <Routes>
            <Route path={"/timesheet/editLeave/:id"} element={<EditLeave/>}/>

          
        </Routes>
    </div>
  )
}

export default RouteLeave;