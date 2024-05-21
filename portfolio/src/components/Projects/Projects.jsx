import './Projects.css';
import React, { useRef, useEffect } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import NFL_Logos_Name from '../../assets/apps/NFL_Logos_Name.png';
import Recipe_Finder from '../../assets/apps/Recipe_Finder.png';
import Note_Keeper from '../../assets/apps/Note_Keeper.png';

function Projects(){
  const projectsRef = useRef();

  useEffect(() => {
    const timeout = 200;
    const showElement = (elem, timeout) => {
        setTimeout(() => {
            elem.classList.add('popup');                            
        }, timeout);
    }
    const callback = (entries) => {
        const parent = entries[0];
        if (parent.isIntersecting){                
            let elem = parent.target;
            elem.childNodes.forEach((child, index) => {
                if (!child.classList.contains('show')){
                    const delay = timeout * (index + 1);
                    showElement(child, delay);
                }
            });
        }
    };
    const options = {
        rootMargin: '0px',
        threshold: 0.3,
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
        <div className="container">
            <div className="projects">
              <div className="title">Projects</div>
              <div className="items" ref={projectsRef}>
                <ProjectItem 
                  imgUrl={NFL_Logos_Name}
                  url="https://nfl-teams-logos-game.web.app/"
                  githubUrl=""
                  title="NFL Logos Game"
                  description="Built in vanilla Javascript, is an application for knowing all the NFL teams names in the 2023 season"
                >
                </ProjectItem>
                <ProjectItem 
                  imgUrl={Recipe_Finder}
                  url="https://recipes-search.web.app/"
                  githubUrl=""
                  title="Recipe finder"
                  description="Built in React. It uses a public API to get recipes base on one ingredient"
                  >
                </ProjectItem>
                <ProjectItem 
                  imgUrl={Note_Keeper}
                  url="https://simple-note-keeper.web.app/"
                  githubUrl=""
                  title="Note keeper"
                  description="Built in React. It uses useEffect, useContext and useRef to not only handle adding and deleting notes as well as seeing the details but also to change the theme"
                >
                </ProjectItem>
              </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;
