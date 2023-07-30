import {react ,useState} from "react"
import reactdom from "react-dom"
function NavBar(props)
{
    return <nav className={props.class}>
        <a href="#">Home</a>
        <a href="#skill-section">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact Me</a>
        <div id="ham" onClick={props.onClick}>
        <div id="up" className={`up `} ></div>
            <div id="mid" className={`mid ` } ></div>
            <div id="bottom" className={`bottom `} ></div></div>
        </nav>
}
export default NavBar