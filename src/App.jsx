import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./globals/Navigation/Navigation";
import Home from "./pages/home/Home";
import SideBar from "./globals/Navigation/SideBar";
import Courses from "./pages/courses/Courses";
import CoursesDetails from "./pages/courses-details/CoursesDetails";

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <>
      <Navigation show={setShowSideMenu}/>
      <SideBar show={showSideMenu} handleShow={setShowSideMenu}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CoursesDetails />} />
      </Routes>
    </>
  );
}

export default App;
