import './Projects.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import NFL_Logos_Name from '../../assets/apps/NFL_Logos_Name.png';
import Recipe_Finder from '../../assets/apps/Recipe_Finder.png';
import Note_Keeper from '../../assets/apps/Note_Keeper.png';
import Memory_Game from '../../assets/apps/Memory_Game.png';

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
                  description="Built in vanilla Javascript. It is an application for knowing all the NFL teams names in the 2023 season."
                >
                </ProjectItem>
                <ProjectItem 
                  imgUrl={Recipe_Finder}
                  url="https://recipes-search.web.app/"
                  githubUrl="https://github.com/AccRPA/react/tree/main/react-recipes"
                  title="Recipe finder"
                  techStack="HTML, CSS, Javascript, React"
                  description="My first project built in React. It uses a public API to get recipes base on only one ingredient. No external libraries were used."
                >
                </ProjectItem>
                <ProjectItem 
                  imgUrl={Note_Keeper}
                  url="https://simple-note-keeper.web.app/"
                  githubUrl="https://github.com/AccRPA/react/tree/main/react-keeper"
                  title="Note keeper"
                  techStack="HTML, CSS, Javascript, React"
                  description="Built in React. It uses useEffect, useContext and useRef to handle adding, deleting notes and seeing notes details as well as switching the theme between light and dark."
                >
                </ProjectItem>
                <ProjectItem 
                  imgUrl={Memory_Game}
                  url="https://memory-card-game-fun.web.app/"
                  githubUrl="https://github.com/AccRPA/react/tree/main/react-memory-game"
                  title="Memory game"
                  techStack="HTML, CSS, Javascript, React"
                  description="Built in React + TypeScript + Vite + Firebase. This fun game will test your memory. Go play it and find the pairs!"
                >
                </ProjectItem>
              </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;
