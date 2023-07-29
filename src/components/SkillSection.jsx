import {react,useRef,useEffect,useState} from "react"
import reactdom from "react-dom"
function SkillSection()
{
    let myref=useRef()
    let [isset,setisset]=useState(false)
    useEffect(()=>{
        const observer=new IntersectionObserver((entries)=>{
            setisset(entries[0].isIntersecting)
        })
        observer.observe(myref.current)
    })
    return <div ref={myref} className={`skill-section ${isset?`scanim`:` `}`} id="skill-section">
                <h1>Skill Set</h1>
                <p>I have learnt a few technologies and they have been displayed below.</p>
    <div className="skill-list">
        <img src={require("./../images/html-5.png")}></img>
        <img src={require("./../images/css-3.png")}></img>
        <img src={require("./../images/js.png")}></img>
        <img src={require("./../images/react.png")}></img>
        <img src={require("./../images/database-storage.png")}></img>
        <img src={require("./../images/c-.png")}></img>
        <img src={require("./../images/python.png")}></img>
    </div>
    <div className="skill-list1">
        <img src={require("./../images/html-5.png")}></img>
        <img src={require("./../images/css-3.png")}></img>
        <img src={require("./../images/js.png")}></img>
        <img src={require("./../images/react.png")}></img>
        <img src={require("./../images/database-storage.png")}></img>
        <img src={require("./../images/c-.png")}></img>
        <img src={require("./../images/python.png")}></img>
    </div>
    </div>
}
export default SkillSection