import react ,{useState} from "react"
import reactdom from "react-dom"
import web from "./../images/web.png"
import github from "./../images/github.png"
function ProjectCard(props)
{
    const [overlay,setoverlay]=useState(false);
    function over(event){
        setoverlay(true);
    }
    function out(event){
        setoverlay(false);

    }

    return <div className="project-card" onMouseOver={over} onMouseOut={out}>
        <div className={`overlay ${overlay?'overlay-down':'overlay-up'}`} id="ov">
            <p className="pctitle"><a href={props.github}><img src={github}></img></a></p>
            <p className="pctitl"><a href={props.live}><img src={web}></img></a></p>
        </div>
        <div className={`card`} id="ov">
            <h1 className="ctitle">{props.title}</h1>
            <p className="cdescription">{props.description}</p>
        </div>

        <img className="pcard" src={props.image}></img>
    </div>
}
export default ProjectCard