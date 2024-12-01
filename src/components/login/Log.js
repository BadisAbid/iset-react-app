// import React from "react";
// import "./Log.css";
// import { FaChalkboardTeacher } from "react-icons/fa";
// import { PiStudentFill } from "react-icons/pi";
// import { RiAdminFill } from "react-icons/ri";
// import { useNavigate } from "react-router-dom"; // Correct import

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div style={styles.container}>
//       {/* Teacher Icon */}
//       <div onClick={() => navigate("/teacher")} style={styles.iconBox}>
//         <FaChalkboardTeacher size={200} />
//         <h2>Teacher</h2>
//       </div>

//       {/* Student Icon */}
//       <div onClick={() => navigate("/student")} style={styles.iconBox}>
//         <PiStudentFill size={200} />
//         <h2>Student</h2>
//       </div>

//       {/* Admin Icon */}
//       <div onClick={() => navigate("/admin")} style={styles.iconBox}>
//         <RiAdminFill size={200} />
//         <h2>Admin</h2>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     flexDirection: "row",
//     gap: "200px",
//   },
//   iconBox: {
//     textAlign: "center",
//     cursor: "pointer",
//   },
// };

// export default Home;

import React, { useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import LoginRegister from "./LoginRegister";

const Log = () => {
  const [role, setRole] = useState(null);

  // If a role is selected, render the LoginRegister component and pass the role
  if (role) {
    return <LoginRegister role={role} />;
  }

  return (
    <div style={styles.container}>
      {/* Teacher Icon */}
      <div onClick={() => setRole("teacher")} style={styles.iconBox}>
        <FaChalkboardTeacher size={200} />
        <h2>Teacher</h2>
      </div>

      {/* Student Icon */}
      <div onClick={() => setRole("student")} style={styles.iconBox}>
        <PiStudentFill size={200} />
        <h2>Student</h2>
      </div>

      {/* Admin Icon */}
      <div onClick={() => setRole("admin")} style={styles.iconBox}>
        <RiAdminFill size={200} />
        <h2>Admin</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "row",
    gap: "200px",
    backgroundImage: "url('/Assets/abstract-smoke-wallpaper.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  iconBox: {
    textAlign: "center",
    cursor: "pointer",
  },
};

export default Log;
