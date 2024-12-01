import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import CoursesSection from "./components/coursesection/CoursesSection";
import Footer from "./components/footer/Footer";
import Courses from "./components/pages/Courses";
import HelpDesk from "./components/pages/HelpDesk";
import Tutorials from "./components/pages/Tutorials";
import LoginRegister from "./components/login/Log";
import Teacher1 from "./components/login/Teacher";
import Admin1 from "./components/login/Admin";
import Student1 from "./components/login/Student";

const TeacherPage = () => <div>Teacher Page</div>;
const StudentPage = () => <div>Student Page</div>;
const AdminPage = () => <div>Admin Page</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CoursesSection />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/teacher1" element={<Teacher1 />} />
          <Route path="/admin1" element={<Admin1 />} />
          <Route path="/student1" element={<Student1 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
