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
import { useEffect, useRef } from 'react';

function Skills(){
    const techRef = useRef();
    
    useEffect(() => {
        const timeout = 150;
        const showElement = (elem, timeout) => {
            setTimeout(() => {
                elem.classList.add('show');
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
        observer.observe(techRef.current);

        return () => observer.disconnect();
    }, []);

    return (
    <section id="skills">
        <div className="container">
            <div className="skills">
                <div className="title">My Tech Stack</div>
                <div className="subtitle">
                    Technologies I have been working with recently
                </div>
                <div className="tech-stack" id="techRef" ref={techRef}>
                    <img id="htmlIcon" src={Html} alt="Html" title='Html'></img>
                    <img id="cssIcon" src={Css} alt="Css" title='Css'></img>
                    <img id="jsIcon" src={Js} alt="Js" title='Js'></img>
                    <img id="reactIcon" src={ReactIcon} alt="ReactIcon" title='React'></img>
                    <img id="btIcon" src={Bootstrap} alt="Bootstrap" title='Bootstrap'></img>
                    <img id="sassIcon" src={Sass} alt="Sass" title='Sass'></img>
                    <img id="gitIcon" src={Git} alt="Git" title='Git'></img>
                    <img id="stIcon" src={Sourcetree} alt="Sourcetree" title='Sourcetree'></img>
                    <img id="vsIcon" src={VSCode} alt="VSCode" title='Visual Studio code'></img>
                    <img id="azIcon" src={AzureDevOps} alt="AzureDevOps" title='Azure DevOps'></img>
                </div>
            </div>
        </div>
    </section>);
}

export default Skills;