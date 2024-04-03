import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./globals/Navigation/Navigation";
import Home from "./pages/home/Home";
import SideBar from "./globals/Navigation/SideBar";
import Courses from "./pages/courses/Courses";
import CoursesDetails from "./pages/courses-details/CoursesDetails";
import Footer from "./globals/Footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/about/About";
import Elearning from "./pages/eLearning/Elearning";

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation show={setShowSideMenu} />
              <SideBar show={showSideMenu} handleShow={setShowSideMenu} />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navigation show={setShowSideMenu} />
              <SideBar show={showSideMenu} handleShow={setShowSideMenu} />
              <About />
              <Footer />
            </>
          }
        />
         <Route
          path="/elearn"
          element={
            <>
              <Navigation show={setShowSideMenu} />
              <SideBar show={showSideMenu} handleShow={setShowSideMenu} />
              <Elearning/>
              <Footer />
            </>
          }
        />
        <Route
          path="/courses"
          element={
            <>
              <Navigation show={setShowSideMenu} />
              <SideBar show={showSideMenu} handleShow={setShowSideMenu} />
              <Courses />
              <Footer />
            </>
          }
        />
        <Route
          path="/courses/:courseId"
          element={
            <>
              <Navigation show={setShowSideMenu} />
              <SideBar show={showSideMenu} handleShow={setShowSideMenu} />
              <CoursesDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NotFound />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
