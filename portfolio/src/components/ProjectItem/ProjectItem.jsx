function ProjectItem({imgUrl, title, description, url, githubUrl}){
    return <div>
        <div className="top">
            <img src={imgUrl}></img>
        </div>
        <div className="bottom">
            <div className="title">
                { title }
            </div>
            <div className="body">
                { description }
            </div>
            <div className="footer">
                <a>Preview</a>
                <a>Github</a>
            </div>
        </div>
    </div>
}

export default ProjectItem;