import React, { useState } from 'react';
import Project from "../Project";
// import Footer from '../Footer';

function Portfolio() {


  const [projects] = useState([
    {
      name: 'Gplogo',
      category: 'project',
      description: 'Xpensifi (gplogo) is a budget tracker to manage monthly income and expenses',
      link: "https://Stefj12.github.io/Budget-Tracker/",
      repo: "https://github.com/Stefj12/Budget-Tracker"
    },
    {
      name: 'Screenshot1',
      category: 'project',
      description: 'Weather Dashboard (screenshot1) projects the upcoming weather for any city for 5 days',
      link: "https://Stefj12.github.io/Weather-dashboard/",
      repo: "https://github.com/Stefj12/Weather-dashboard"
    },
    {
      name: 'homepagebackground',
      category: 'project',
      description: 'The Employee Management System (homepagebackground) monitors employees pto, sick and holiday time',
      link: "https://stefj12.github.io/Employee-Tracker/",
      repo: "https://github.com/Stefj12/Employee-Tracker"
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