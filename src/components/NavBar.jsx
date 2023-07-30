import {react ,useState} from "react"
import reactdom from "react-dom"


function NavBar(props)
{
    let [up,setup]=useState("")
let [mid,setmid]=useState("")
let [bot,setbot]=useState("")
    function clicked(){
        if(setup=="cup"){
            setup("ucup")
            setmid("ucmid")
            setbot("ucbot")
        }
        else{
            setup("cup")
            setmid("cmid")
            setbot("cbot")
        }
        }
    return <nav className={props.class}>
        <a href="#">Home</a>
        <a href="#skill-section">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact Me</a>
        <div id="ham" onClick={props.onClick}>
        <div id="up" className={`up ${up}`} ></div>
            <div id="mid" className={`mid ${mid}` } ></div>
            <div id="bottom" className={`bottom ${bot}`} ></div></div>
        </nav>
}
export default NavBar