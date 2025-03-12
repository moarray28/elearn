import React from "react";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import SkillsPage from "./pages/SkillsPage";
import ProfilePage from "./pages/ProfilePage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import TeacherProfilePage from "./pages/TeacherProfilePage";
import CourseDetailPage from "./pages/CourseDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/student" element={<ProfilePage />} />
        <Route path="/teacher" element={<TeacherProfilePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course/:courseId" element={<CourseDetailPage/>} />
  
      </Routes>
    </Router>
  );
}

export default App;
