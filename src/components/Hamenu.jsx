import react from "react"
import click from "./NavBar"
function Hamenu(props){
    return<div  className={props.Click?"visible":"hidden"}>
        <a href="#">Home</a>
        <a href="#skill-section">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact Me</a>
    </div>
}
export default Hamenu