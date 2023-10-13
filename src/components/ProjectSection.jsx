import react ,{useState,useEffect,useRef} from "react"
import reactdom from "react-dom"
import foodblog from "./../images/foodblog.png"
import moviedb from "./../images/moviedb.png"
import tech from "./../images/tech.png"
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
        <ProjectCard image={foodblog} title="Food Blog website" description="This is a platform where users can share their experiences with different food." github="https://github.com/rahuln577/Personal-Blog-Food-Blog" live="https://nrahul.netlify.app"/>
        <ProjectCard image={moviedb} title="MovieDB website" description="This is a website which has description of all the latest movies, basically a database for movies." github="https://github.com/rahuln577/moviedbfinal" live="https://moviedbbyrahul.netlify.app"/>
        <ProjectCard image={tech} title="TechTuneMotors website" description="This is a website for mechanic shop called TechTune Motors which allows the user to book different services offered." github="https://github.com/rahuln577/TechTuneMotors" live="http://techtunemotors.netlify.app"/>
    </div>
    </div>
}
export default ProjectSection