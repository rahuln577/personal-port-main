import react ,{useState} from "react"
import reactdom from "react-dom"
import NavBar from "./components/NavBar"
import Herosection from "./components/Herosection"
import SkillSection from "./components/SkillSection"
import ProjectCard from "./components/project-card"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import Hamenu from"./components/Hamenu"

function App()
{
    let [click,setclick]=useState(false)
    function clicked(){
        setclick((prev)=>{
            return(!prev)
        })}
    return <div id="main">
     <NavBar class="pc" onClick={clicked}/>
     <Hamenu Click={click}/>   
    <Herosection/>
    <SkillSection />
    <ProjectSection/>
    <ContactSection/>
    <Footer/>
    </div>
}
export default App