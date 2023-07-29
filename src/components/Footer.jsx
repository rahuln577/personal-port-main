import react from "react"
import reactdom from "react-dom"
import web from "./../images/web.png"
import github from "./../images/github.png"
import instagram from "./../images/instagram.png"
function Footer()
{
    return <div id="footer"><footer>
        <a href="#"><img src={web}></img></a>
        <a href="#"><img src={github}></img></a>
        <a href="#"><img src={instagram}></img></a>
    </footer></div>
}
export default Footer