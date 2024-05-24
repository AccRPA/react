import './Skills.css';
import Html from '../../assets/tech-icons/html.png';
import Css from '../../assets/tech-icons/css.png';
import Js from '../../assets/tech-icons/javascript.png';
import ReactIcon from '../../assets/tech-icons/react.png';
import Bootstrap from '../../assets/tech-icons/bootstrap.png';
import Sass from '../../assets/tech-icons/sass.png';
import Git from '../../assets/tech-icons/git.png';
import Sourcetree from '../../assets/tech-icons/sourcetree.png';
import VSCode from '../../assets/tech-icons/vscode.png';
import AzureDevOps from '../../assets/tech-icons/azure_devops.png';

function Skills(){
    return (
    <section id="skills">
        <div className="container">
            <div className="skills">
                <div className="title">My Tech Stack</div>
                <div className="subtitle">
                    Technologies I have been working with recently
                </div>
                <div className="tech-stack">
                    <img id="htmlIcon" className="item-fade" src={Html} alt="Html" title='Html'></img>
                    <img id="cssIcon" className="item-fade" src={Css} alt="Css" title='Css'></img>
                    <img id="jsIcon" className="item-fade" src={Js} alt="Js" title='Js'></img>
                    <img id="reactIcon" className="item-fade" src={ReactIcon} alt="ReactIcon" title='React'></img>
                    <img id="btIcon" className="item-fade" src={Bootstrap} alt="Bootstrap" title='Bootstrap'></img>
                    <img id="sassIcon" className="item-fade" src={Sass} alt="Sass" title='Sass'></img>
                    <img id="gitIcon" className="item-fade" src={Git} alt="Git" title='Git'></img>
                    <img id="stIcon" className="item-fade" src={Sourcetree} alt="Sourcetree" title='Sourcetree'></img>
                    <img id="vsIcon" className="item-fade" src={VSCode} alt="VSCode" title='Visual Studio code'></img>
                    <img id="azIcon" className="item-fade" src={AzureDevOps} alt="AzureDevOps" title='Azure DevOps'></img>
                </div>
            </div>
        </div>
    </section>);
}

export default Skills;