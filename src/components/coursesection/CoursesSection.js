import React from "react";
import { Link } from "react-router-dom";
import "./CoursesSection.css";

const courses = [
  {
    title: "TECHNOLOGIE DE L'INFORMATIQUE",
    category: "2 Catégories de cours",
    dateModified: "23 mars 2020",
    img: require("../../assets/ti.jpg"),
    link: "/courses",
  },
  {
    title: "ADMINISTRATION DES AFFAIRES",
    category: "2 Catégories de cours",
    dateModified: "23 mars 2020",
    img: require("../../assets/business.jpg"),
    link: "/affaires",
  },
  {
    title: "GÉNIE MÉCANIQUE",
    category: "2 Catégories de cours",
    dateModified: "23 mars 2020",
    img: require("../../assets/genieM.png"),
    link: "/mecanique",
  },
  {
    title: "GÉNIE ELECTRIQUE",
    category: "2 Catégories de cours",
    dateModified: "23 mars 2020",
    img: require("../../assets/genieE.png"),
    link: "/electrique",
  },
];

const CoursesSection = () => {
  return (
    <div className="courses-container">
      <header className="header">
        <div className="header-content">
          <h1>Bienvenue à l'ENT dédié au réseau des ISET</h1>
        </div>
      </header>
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <img src={course.img} alt={course.title} className="course-img" />

          <div className="course-body">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-date">Modifié {course.dateModified}</p>
            <p className="categories-count">{course.category}</p>
            <Link to={course.link}>
              <button className="view-course-button">View Course</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesSection;
