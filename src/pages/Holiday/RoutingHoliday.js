import React from 'react'
import {Route, Routes} from 'react-router-dom';
import EditHoliday from '../Holiday/Mainfile/EditHoliday';
import HolidayView from '../Holiday/Mainfile/HolidayView';
import HolidayProfile from '../Holiday/Mainfile/HolidayProfile';


const RoutingHoliday = () => {
  return (
    <div>
        <Routes>
        <Route path={"/holiday/editholiday/:id"} element={<EditHoliday/>} />
        <Route
          path={"/holiday/holidayview"}
          element={<HolidayView />}
        />
      <Route
          path={"/holiday/holidayprofile"}
          element={<HolidayProfile />}
        />
      
      </Routes>
    </div>
  )
}
export default RoutingHoliday;