import './ProjectItem.css';

function ProjectItem({imgUrl, title, description, url, githubUrl, techStack}){
    return (
        <div className="project-item item-fade">
            <div className="top">
                <img src={imgUrl} alt={title}></img>
            </div>
            <div className="bottom">
                <div className="title">
                    { title }
                </div>
                <div className="body">
                    { description }
                </div>
                <div className="footer">
                    <div className='tech-stack'>
                        <strong>Tech stack</strong>: {techStack}
                    </div>
                    <div className="links">
                        <a href={url} target="_blank" rel="noreferrer">
                            <i className="bi bi-eye"></i>
                            Preview
                        </a>
                        <a href={githubUrl} target="_blank" rel="noreferrer">
                            <i className="bi bi-github"></i>
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;