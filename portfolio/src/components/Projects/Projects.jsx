import './Projects.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import NFL_Logos_Name from '../../assets/apps/NFL_Logos_Name.png';
import Recipe_Finder from '../../assets/apps/Recipe_Finder.png';
import Note_Keeper from '../../assets/apps/Note_Keeper.png';

function Projects(){
  return (
    <section id="projects">
        <div className="container">
            <div className="projects">
              <div className="title">Projects</div>
              <div className="subtitle">
                Personal projects I have built for training my skills
              </div>              
              <div className="items">
                <ProjectItem 
                  imgUrl={NFL_Logos_Name}
                  url="https://nfl-teams-logos-game.web.app/"
                  githubUrl="https://github.com/AccRPA/javascript/tree/main/Tests/nfl_teams_logos"
                  title="NFL Logos Game"
                  techStack="HTML, CSS, Javascript"
                  description="Built in vanilla Javascript, is an application for knowing all the NFL teams names in the 2023 season"
                >
                </ProjectItem>
                <ProjectItem 
                  imgUrl={Recipe_Finder}
                  url="https://recipes-search.web.app/"
                  githubUrl="https://github.com/AccRPA/react/tree/main/react-recipes"
                  title="Recipe finder"
                  techStack="HTML, CSS, Javascript, React"
                  description="Built in React. It uses a public API to get recipes base on one ingredient"
                >
                </ProjectItem>
                <ProjectItem 
                  imgUrl={Note_Keeper}
                  url="https://simple-note-keeper.web.app/"
                  githubUrl="https://github.com/AccRPA/react/tree/main/react-keeper"
                  title="Note keeper"
                  techStack="HTML, CSS, Javascript, React"
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
