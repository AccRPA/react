import React from 'react';
import './Projects.css';
import ProjectItem from '../ProjectItem/ProjectItem';

const Projects = () => (
  <section id="projects">
      <div className="container">
          <div className="projects">
            <ProjectItem 
              imgUrl=""
              title="NFL Logos Game"
              description="Built in vanilla Javascript, is an application for knowing all the NFL teams names in the 2023 season"
            >
            </ProjectItem>
            <ProjectItem 
              imgUrl=""
              title="Recipe finder"
              description="Built in React. It uses a public API to get recipes base on one ingredient"
              >
            </ProjectItem>
            <ProjectItem 
              imgUrl=""
              title="Note keeper"
              description="Built in React. It uses useEffect, useContext and useRef to not only handle adding and deleting notes as well as seeing the details but also to change the theme"
            >
            </ProjectItem>
          </div>
      </div>
  </section>
);

export default Projects;
