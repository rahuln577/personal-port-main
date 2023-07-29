import react from "react"
import reactdom from "react-dom"
function NavBar(props)
{
    return <nav className={props.class}>
        <a href="#">Home</a>
        <a href="#skill-section">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact Me</a>
        </nav>
}
export default NavBar