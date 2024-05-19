import './Skills.css';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Js from '../../assets/javascript.png';
import ReactIcon from '../../assets/react.png';
import Bootstrap from '../../assets/bootstrap.png';
import Sass from '../../assets/sass.png';
import Git from '../../assets/git.png';
import Sourcetree from '../../assets/sourcetree.png';
import VSCode from '../../assets/vscode.png';
import AzureDevOps from '../../assets/azure_devops.png';

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
                {/* this with an array? */}
                    <img src={Html} alt="Html" title='Html'></img>
                    <img src={Css} alt="Css" title='Css'></img>
                    <img src={Js} alt="Js" title='Js'></img>
                    <img src={ReactIcon} alt="ReactIcon" title='React'></img>
                    <img src={Bootstrap} alt="Bootstrap" title='Bootstrap'></img>
                    <img src={Sass} alt="Sass" title='Sass'></img>
                    <img src={Git} alt="Git" title='Git'></img>
                    <img src={Sourcetree} alt="Sourcetree" title='Sourcetree'></img>
                    <img src={VSCode} alt="VSCode" title='Visual Studio code'></img>
                    <img src={AzureDevOps} alt="AzureDevOps" title='Azure DevOps'></img>

                </div>
            </div>
        </div>
    </section>);
}

export default Skills;