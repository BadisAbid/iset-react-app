import React from 'react';
import './InformatiquePage.css'; 
import { Link } from 'react-router-dom'; 

const InformatiquePage = () => {
  const semesters = [
    {
      title: "1er Semestre",
      description: "Cours disponibles pour le premier semestre.",
      link: "/informatique/1er-semestre",  // Add this if you want navigation on click
    },
    {
      title: "2ème Semestre",
      description: "Cours disponibles pour le deuxième semestre.",
      link: "/informatique/2eme-semestre",  // Add this if you want navigation on click
    }
  ];

  return (
    <div className="informatique-container">
      {semesters.map((semestre, index) => (
        <div className="semestre-card" key={index}>
          <h2>{semestre.title}</h2>
          <p>{semestre.description}</p>

          {/* Optional: Add a button to navigate to specific semester */}
          <Link to={semestre.link}>
            <button className="semestre-button">Voir les cours</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InformatiquePage;
