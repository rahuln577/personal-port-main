import react ,{useState,useRef,useEffect} from "react"
import reactdom from "react-dom"
import Typewriter from 'typewriter-effect'
function Herosection()
{
    let myref=useRef()
    let [isset,setisset]=useState(false)
    useEffect(()=>{
        const observer=new IntersectionObserver((entries)=>{
            setisset(entries[0].isIntersecting)
        })
        observer.observe(myref.current)
    })
    return <div ref ={myref} className={`${isset?`scanim`:` `}`} id="herosection">
        <div>
    <p id="wel">Welcome to my portfolio</p>
    <h1>Hello I'm <span id="name">Rahul</span>,</h1>
    <h1 id="type">
    <Typewriter
    options={{loop:true,}}
    onInit={(typewriter)=> {typewriter.typeString("MERN Developer").pauseFor(1000).deleteAll().typeString("C++ Coder").start();
}}/></h1>
    <p id="helper">I am a full stack web developer with expertise in MERN stack.
        I have also solved a good amount of dsa problems on various platforms . I am a smart worker who would like to put my best in the work I am given . To know more about me ,click the below link.
    </p>
    <a id="resume" href="https://drive.google.com/file/d/1N2nkelaB7gBCqM01J9nDKL5j0ZckAK5t/view?usp=sharing">Download CV</a></div>
    <img src={require("./../images/dev.png")}></img>
    </div>
}
export default Herosection