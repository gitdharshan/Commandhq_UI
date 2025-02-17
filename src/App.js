import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Users from './component/users/Users';
import Dashboard from './component/Teacher module/pages/Dashboard';
import Assignment from './component/Teacher module/pages/Assignment';
import MainNavigation from './component/Teacher module/Navigation/MainNavigation';
import Attendance from './component/Teacher module/pages/Attendance';
import Timetable from './component/Teacher module/pages/Timetable';
const App = () => {
  return (
   <Router>
   <MainNavigation />
    <Routes>
    <Route path="u1/dash" element={<Dashboard />}/>
    <Route path="/users" element={<Users />}/>
    <Route path="/assign" element={<Assignment />}/>

    <Route path="/attendance" element={<Attendance />}/>
     <Route path="/time" element={<Timetable />}/>
    </Routes>
   </Router>
  );
};

export default App;
