import react ,{useState} from "react"
import reactdom from "react-dom"
import NavBar from "./components/NavBar"
import Herosection from "./components/Herosection"
import SkillSection from "./components/SkillSection"
import ProjectCard from "./components/project-card"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

function App()
{
    return <div id="main">
     <NavBar class="pc"/>   
    <Herosection/>
    <SkillSection />
    <ProjectSection/>
    <ContactSection/>
    <Footer/>
    </div>
}
export default App