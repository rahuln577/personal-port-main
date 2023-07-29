import react ,{useState,useEffect,useRef} from "react"
import reactdom from "react-dom"
import foodblog from "./../images/foodblog.png"
import ProjectCard from "./project-card"
function ProjectSection()

{
    let myref=useRef()
    let [isset,setisset]=useState(false)
    useEffect(()=>{
        const observer=new IntersectionObserver((entries)=>{
            setisset(entries[0].isIntersecting)
        })
        observer.observe(myref.current)
    })
    return <div ref ={myref}className={`project ${isset?`scanim`:` `}`} id="project">
        <h1>Projects</h1>
        <div className="plist">
        <ProjectCard image={foodblog} title="Food Blog website" description="This is a platform where users can share their experiences with different food." github="www.google.com" live="www.google.com"/>
        <ProjectCard image={foodblog} title="Food Blog website" description="This is a platform where users can share their experiences with different food." github="www.google.com" live="www.google.com"/>
        <ProjectCard image={foodblog} title="Food Blog website" description="This is a platform where users can share their experiences with different food." github="www.google.com" live="www.google.com"/>
    </div>
    </div>
}
export default ProjectSection