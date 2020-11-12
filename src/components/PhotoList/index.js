import React, { useState } from 'react';
import Project from "../Project";
// import Footer from '../Footer';

function Portfolio() {


  const [projects] = useState([
    {
      name: 'Screenshot101',
      category: 'project',
      description: 'a budget tracker to manage monthly income and expenses',
      link: "https://stefj12.github.io/Budget-Tracker/",
      repo: "https://github.com/Stefj12/Budget-Tracker"
    },
    {
      name: 'img1',
      category: 'project',
      description: 'Weather Dashboard (img1) projects the upcoming weather for any city for 5 days',
      link: "https://stefj12.github.io/Weather-Dashboard/",
      repo: "https://github.com/Stefj12/Weather-Dashboard"
    },
    {
      name: 'Screenshot100',
      category: 'project',
      description: 'The Employee Management System (Screenshot(16) monitors employees pto, sick and holiday time',
      link: "https://stefj12.github.io/Employee/",
      repo: "https://Stefj12/Employee-Tracker"
    },
    
  ]);

  return (
    <div>
      <div className="flex-center">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
      {/* <Footer></Footer>  */}
    </div>
  );
};

export default Portfolio;