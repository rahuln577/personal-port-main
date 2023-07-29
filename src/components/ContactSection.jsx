import react ,{useState,useRef,useEffect} from "react"
import reactdom from "react-dom"
function ContactSection(){
    let myref=useRef()
    let [isset,setisset]=useState(false)
    useEffect(()=>{
        const observer=new IntersectionObserver((entries)=>{
            setisset(entries[0].isIntersecting)
        })
        observer.observe(myref.current)
    })
    return <div ref={myref} className={`${isset?`scanim`:` `}`} id="contact">
        <form>
            <h1>Get in touch</h1>
            <div id="csection">
            <div className="c">
                <input type="text" id="fname" className="inp" placeholder="First Name"></input>
                <input type="text" id="lname" className="inp" placeholder="Last Name"></input>
            </div>
            <div className="c">
                <input type="text" id="email" className="inp" placeholder="Email address"></input>
                <input type="text" id="phone" className="inp" placeholder="Phone number"></input>
            </div>
            <div id="text">
                <textarea id="message" rows="4" placeholder="Message"></textarea> 
            </div>
            </div>
            <input type="submit" id="submit"></input>
        </form>
    </div>
}
export default ContactSection